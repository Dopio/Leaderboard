import CompetitiveModel from "../models/CompetitiveModel.js"

export const create = async (req, res) => {
  try {
    const doc = new CompetitiveModel({
      competitiveTitle: req.body.competitiveTitle,
      competitiveData: req.body.competitiveData,
      students: req.body.students,
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