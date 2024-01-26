export default {
  title: 'Employee',
  name: 'employee',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Age',
      name: 'age',
      type: 'number',
    },
    {
      title: 'Department',
      name: 'department',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'IsWorking',
      name: 'isWorking',
      type: 'boolean',
    },
    {
      title: 'WorkingHours',
      name: 'workingHours',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
