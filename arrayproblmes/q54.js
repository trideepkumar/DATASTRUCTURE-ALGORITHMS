const employees = [
    { name: 'Alice', salary: 50000, department: 'HR' },
    { name: 'Bob', salary: 60000, department: 'Engineering' },
    { name: 'Charlie', salary: 55000, department: 'HR' },
    { name: 'David', salary: 70000, department: 'Marketing' }
  ];


  const result = employees.filter((obj)=>{  return obj.department === 'HR'}).map((obj)=>{return obj.name})

//   const name = result

  console.log(result)
//   console.log(name)

