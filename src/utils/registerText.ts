export const sections = [
    {   
        id: 1,
        title: 'Cadastro',
        inputText: [
            {    
                id: 1,
                label: 'Nome completo',
                placeholder: 'Digite seu nome completo',
                type: 'name'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email',
                type: 'email'
            },
            {
                id: 3,
                label: 'Senha',
                placeholder: 'Digite sua senha',
                type: 'password'
            }
        ],
        checkbox: [],
        content: 'Faça seu cadastro',
        active: true
    },
    {
        id: 2,
        title: 'Agora mais dados sobre você:',
        inputText: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP',
                type: 'cep'
            },
            {
                id: 2,
                label: 'Telefone',
                placeholder: 'Digite seu telefone',
                type: 'phone'
            },
            {
                id: 3,
                label: 'Data de nascimento',
                placeholder: 'Digite sua data de nascimento',
                type: 'date'
            }
        ],
        checkbox: [],
    },
    {
        id: 3,
        title: 'Quais os seus planos de saúde:',
        inputText: [],
        checkbox: [
            {
                id: 1,
                value: 'Unimed',
            },
            {
                id: 2,
                value: 'Amil',
            },
            {
                id: 3,
                value: 'Bradesco',
            },
            {
                id: 4,
                value: 'Sulamérica',
            },
            {
                id: 5,
                value: 'Outros',
            },
        ],
    }
]