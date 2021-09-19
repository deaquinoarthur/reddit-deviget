module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'component/test.tsx.hbs'
      }
    ]
  }),
    plop.setGenerator('template', {
      description: 'Create a template',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your template name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/templates/{{name}}/index.tsx',
          templateFile: 'template/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{name}}/styles.ts',
          templateFile: 'template/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{name}}/test.tsx',
          templateFile: 'template/test.tsx.hbs'
        }
      ]
    })
}
