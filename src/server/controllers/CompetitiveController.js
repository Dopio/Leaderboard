import CompetitiveModel from "../models/CompetitiveModel.js"

export const create = async (req, res) => { //Создание соревнования
  try {
    const doc = new CompetitiveModel({
      competitiveTitle: req.body.competitiveTitle,
      competitiveData: req.body.competitiveData,
      studentName: req.body.studentName,
      studentPoints: req.body.studentPoints,
      user: req.userId
    })

    const competitive = await doc.save()
    res.json(competitive)

  } catch (error) {
    console.log("Вот что за ошибка!!!!", error)
    res.status(500).json({
      message: 'Не удалось создать соревнование'
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
}