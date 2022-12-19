import { Op } from 'sequelize'

const create = (db) => async (req, res) => {
  const competitive = await db.Competitive.create(req.body)
  res.json(competitive)
}

const getAll = (db) => async (_, res) => {
  const competitives = await db.Competitive.findAll({ include: db.Student })

  res.json(competitives)
}

const getOne = (db) => async (req, res) => {
  const competitiveId = req.params.id
  const competitive = await db.Competitive.findAll({
    where: {
      id: {
        [Op.eq]: competitiveId
      }
    },
    include: db.Student
  })

  res.json(competitive)
}

const remove = (db) => async (req, res) => {
  const competitiveId = req.params.id
  const competitive = await db.Competitive.destroy({
    where: {
      id: {
        [Op.eq]: competitiveId
      }
    }
  })

  res.json(competitive)
}

const update = (db) => async (req, res) => {
  const competitiveId = req.params.id
  const competitive = await db.Competitive.update(req.body, {
    where: {
      id: {
        [Op.eq]: competitiveId
      }
    }
  })

  res.json(competitive)
}

const addStudent = (db) => async (req, res) => {
  const competitiveId = req.params.id
  const studentId = req.body.userId
  const points = req.body.points

  const objectToCreate = {
    studentId,
    competitiveId: parseInt(competitiveId),
    points
  }

  const competitiveStudent = await db.StudentCompetitive.create(objectToCreate)

  res.json(competitiveStudent)
}

export default (app, db) => {
  app.post('/competitive', create(db))
  app.get('/competitive', getAll(db))
  app.get('/competitive/:id', getOne(db))
  app.delete('/competitive/:id', remove(db))
  app.put('/competitive/:id', update(db))
  app.put('/competitive/:id/add-student', addStudent(db))
}
