const Project = require("./project.model").Project;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   Project.find(); // find and return value to controller
} 
service.insert = (value) => {
    data = new Project({
        projectCode: value.projectCode,
        projectType: value.projectType,
        projectProgress: 0,
        projectFile: value.projectFile,
        projectStart: value.scopeStart,
        projectEnd: value.scopeEnd,
        StatusProject: value.projectCode,
        // pm: { "type": mongoose.Schema.Types.ObjectId, "ref": "pm" },
        pm: value.pm,
        customer: value.customer.customerName
    })
    return data.save(); // insert data in database 
}

module.exports = service // export module for use service in another files