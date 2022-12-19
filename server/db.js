import { Sequelize, DataTypes } from 'sequelize'

export default async () => {
  const sequelize = new Sequelize('postgres://hvoya:hvoya@localhost:12345/leaders')

  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})

  const StudentCompetitive = sequelize.define('StudentCompetitive', {
    points: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {})

  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})

  const Competitive = sequelize.define('Competitive', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {})

  Student.belongsToMany(
    Competitive,
    {
      through: StudentCompetitive,
      foreignKey: 'studentId'
    }
  )

  Competitive.belongsToMany(
    Student,
    {
      through: StudentCompetitive,
      foreignKey: 'competitiveId'
    }
  )

  await sequelize.sync({ alter: true })

  return {
    sequelize,
    User,
    Competitive,
    Student,
    StudentCompetitive
  }
}
