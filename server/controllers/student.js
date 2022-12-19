import { Op } from 'sequelize'

const create = (db) => async (req, res) => {
  const student = await db.Student.create(req.body)
  res.json(student)
}

const getAll = (db) => async (_, res) => {
  const students = await db.Student.findAll()

  res.json(students)
}

const getOne = (db) => async (req, res) => {
  const studentId = req.params.id
  const student = await db.Student.findAll({
    where: {
      id: {
        [Op.eq]: studentId
      }
    }
  })

  res.json(student)
}

const remove = (db) => async (req, res) => {
  const studentId = req.params.id
  const student = await db.Student.destroy({
    where: {
      id: {
        [Op.eq]: studentId
      }
    }
  })

  res.json(student)
}

const update = (db) => async (req, res) => {
  const studentId = req.params.id
  const student = await db.Student.update(req.body, {
    where: {
      id: {
        [Op.eq]: studentId
      }
    }
  })

  res.json(student)
}

export default (app, db) => {
  app.post('/student', create(db))
  app.get('/student', getAll(db))
  app.get('/student/:id', getOne(db))
  app.delete('/student/:id', remove(db))
  app.put('/student/:id', update(db))
}
