const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('employee');

router.get('/',(req,res)=>{
    res.render('employee/addoredit',{
        viewTitle: "insert employee"
    });
    router.post('/',(req,res)=>{
        insertRecord (req,res)
    });
});
function insertRecord(req,res){
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, employee) => {
        if(!err){
            res.redirect('employee/list')
        }
        else{
            console.log('erro durin insertion' + err)
        }
    });
}
router.get('/list', (req, res) => {
    Employee.find((err, employee) => {
        if(!err)  {
            res.render('employee/list',{list: employee});
    }
    else{
        console.log('filed to retrieved the record')
    }
    });
});

module.exports = router;