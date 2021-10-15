describe('Basic API Testing - Part #1', () => {
  
  
  beforeEach(() => {
    cy.request('GET', 'https://gorest.co.in/public/v1/todos').as('todos')
  })
  
  it('Body length - TEST', () => {
    cy.request('https://gorest.co.in/public/v1/todos')
    .its('body.data')
    .should('have.length', 20)
  })

  it('Request Status - Test', () => {
    cy.request('https://gorest.co.in/public/v1/todos')
    .its('status')
    .should('eq', 200)
  })

  it('Header/Content-Type - Test', () => {
    cy.request('https://gorest.co.in/public/v1/todos')
    .its('headers.content-type')
    .should('include', 'application/json')
    .and('include', 'charset=utf-8')
  })

  const apiItems = [
    {
        "id": 1,
        "user_id": 1,
        "title": "Tibi aiunt esse dolorem bene alveus voluptatum arcesso vorago cornu.",
        "due_on": "2021-11-03T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 2,
        "user_id": 1,
        "title": "Cui xiphias despecto crux concido condico desipio.",
        "due_on": "2021-11-02T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 4,
        "user_id": 4,
        "title": "Crapula tergiversatio sordeo cernuus conculco.",
        "due_on": "2021-10-16T00:00:00.000+05:30",
        "status": "completed"
    },
    {
        "id": 5,
        "user_id": 4,
        "title": "Capio adimpleo cresco suffragium varius aut appello deorsum super sodalitas carcer.",
        "due_on": "2021-10-31T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 6,
        "user_id": 4,
        "title": "Animadverto demitto contra tamquam summa video.",
        "due_on": "2021-11-08T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 7,
        "user_id": 5,
        "title": "Aperio solum tutis capto conatus vitiosus vesper dolorum amor.",
        "due_on": "2021-10-15T00:00:00.000+05:30",
        "status": "completed"
    },
    {
        "id": 8,
        "user_id": 7,
        "title": "Vel unde ceno adsuesco aufero quidem usus taedium.",
        "due_on": "2021-10-26T00:00:00.000+05:30",
        "status": "completed"
    },
    {
        "id": 12,
        "user_id": 9,
        "title": "Sperno cunabula complectus denego curto sed.",
        "due_on": "2021-10-18T00:00:00.000+05:30",
        "status": "completed"
    },
    {
        "id": 13,
        "user_id": 10,
        "title": "Vilicus defaeco trado et versus cariosus comes cicuta officia claudeo campana.",
        "due_on": "2021-10-31T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 14,
        "user_id": 10,
        "title": "Vita vinco tutis id confugo unde.",
        "due_on": "2021-10-27T00:00:00.000+05:30",
        "status": "completed"
    },
    {
        "id": 15,
        "user_id": 11,
        "title": "Tyrannus vestrum vel basium cupiditate distinctio accusantium bis suppellex thorax consequatur.",
        "due_on": "2021-10-15T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 16,
        "user_id": 11,
        "title": "Avaritia audacia nihil nobis triduana tener allatus.",
        "due_on": "2021-10-23T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 17,
        "user_id": 11,
        "title": "Defessus despecto antiquus tenuis quis vel admitto vicinus trucido cibo.",
        "due_on": "2021-11-07T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 18,
        "user_id": 12,
        "title": "Volo victoria vulgivagus subiungo thalassinus bonus tamdiu aequus curriculum adipisci tenuis.",
        "due_on": "2021-10-16T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 22,
        "user_id": 14,
        "title": "Creator summopere nihil depono utor.",
        "due_on": "2021-11-08T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 23,
        "user_id": 14,
        "title": "Autus veniam tendo venia bibo circumvenio.",
        "due_on": "2021-11-03T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 24,
        "user_id": 14,
        "title": "Curatio animi sublime consuasor cado.",
        "due_on": "2021-10-29T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 27,
        "user_id": 18,
        "title": "Caecus ante aliqua antepono desparatus.",
        "due_on": "2021-10-25T00:00:00.000+05:30",
        "status": "pending"
    },
    {
        "id": 28,
        "user_id": 18,
        "title": "Tepidus conservo corona testimonium adduco tristis baiulus vita arma maiores corrigo.",
        "due_on": "2021-11-12T00:00:00.000+05:30",
        "status": "completed"
    },
    {
        "id": 29,
        "user_id": 18,
        "title": "Est angulus tantum chirographum umerus comes tabernus.",
        "due_on": "2021-11-02T00:00:00.000+05:30",
        "status": "completed"
    }
  ]

  it('Initial items from End Point - Test', () => {
    cy.request('https://gorest.co.in/public/v1/todos')
    .its('body.data')
    .should('deep.eq', apiItems)
  })

  it('JSON Schema Check', () => {
    cy.request('https://gorest.co.in/public/v1/todos')
    .its('body.data')
    .each(value => {
      expect(value).to.have.all.keys('id', 'user_id', 'title', 'due_on', 'status')
    })
  })

  it('Using Alias request', () => {
      cy.get('@todos').should(response => {
          expect(response.body.data).to.have.length(20);
          expect(response).to.have.property('headers');
      })
  })
});