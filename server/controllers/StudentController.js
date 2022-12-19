import StudentModel from "../models/StudentModel.js"

export const create = async (req, res) => { //Создание соревнования
  try {
    
    let newStudent = new StudentModel(req.body)
    let savedStudent = await newStudent.save()

    res.json(savedStudent)

  } catch (error) {
    console.log("Вот что за ошибка!!!!", error)
    res.status(500).json({
      message: 'Не удалось создать ученика'
    })
  }
}

export const getAll = async (req, res) => { //Получение всех студентов
  try {
    const studentId = req.params.id

    const foundCompetitive = await StudentModel
    .find({_id: studentId})
    .populate('student')

    res.json(foundCompetitive)


    } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось получить учеников'
    })
  }
}

/* export const getAll = async (req, res) => { //Получение соревнования
  try {
    const competitiveId = req.params.id

    CompetitiveModel.findOne({
      _id: competitiveId
    },
      (error, doc) => {

        if (error) {
          console.log(error)
          return res.status(500).json({
            message: 'Не удалось вернуть соревнование'
          })
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Соревнование не найдено!'
          })
        }

        res.json(doc)
      }
    )

  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: 'Соревнование не найдено!'
    })
  }
}

export const getOne = async (req, res) => { //Получение соревнования
  try {
    const competitiveId = req.params.id

    CompetitiveModel.findOne({
      _id: competitiveId
    },
      (error, doc) => {

        if (error) {
          console.log(error)
          return res.status(500).json({
            message: 'Не удалось вернуть соревнование'
          })
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Соревнование не найдено!'
          })
        }

        res.json(doc)
      }
    )

  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: 'Соревнование не найдено!'
    })
  }
}

export const remove = async (req, res) => { //Удаление соревнования
  try {
    const competitiveId = req.params.id

    CompetitiveModel.findOneAndDelete({
      _id: competitiveId
    },
      (error, doc) => {

        if (error) {
          console.log(error)
          return res.status(500).json({
            message: 'Не удалось удалить соревнование'
          })
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Соревнование не найдено!'
          })
        }

        res.json({
          succsess: true
        })
      }
    )

  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: 'Соревнование не найдено!'
    })
  }
}

export const update = async (req, res) => { //Редактирование соревнования
  try {
    const competitiveId = req.params.id

    await CompetitiveModel.updateOne(
      {
        _id: competitiveId
      },
      {
        competitiveTitle: req.body.competitiveTitle,
        competitiveData: req.body.competitiveData,
        studentName: req.body.studentName,
        studentPoints: req.body.studentPoints,
        user: req.userId
      },
    )
    res.json({
      succsess: true
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось обновить соревнование'
    })
  }
} */