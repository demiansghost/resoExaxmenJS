import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Curso } from "./cursos.js";

const Estudiante = sequelize.define('Estudiante',{
    id_estudiante:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    rut:{
        type:DataTypes.STRING(15)
    },
    nombre:{
        type:DataTypes.STRING(30)
    },
    apellido_pat:{
        type:DataTypes.STRING(30)
    },
    apellido_mat:{
        type:DataTypes.STRING(30)
    },
    direccion:{
        type:DataTypes.STRING(100)
    }
},{
    updatedAt:false,
    createdAt:false,
    tableName:'estudiante'
});

export{
    Estudiante
}
// const estudiantes = await Estudiante.findAll();
// console.log(estudiantes);
Curso.hasMany(Estudiante,{
    foreignKey:'codigo_curso',
    sourceKey: 'codigo_curso'
});
Estudiante.belongsTo(Curso,{
    foreignKey: 'codigo_curso',
    targetKey:'codigo_curso'
});
// const estudiantes = await Estudiante.findAll({
//     include:Curso
// });
// console.log(estudiantes);
