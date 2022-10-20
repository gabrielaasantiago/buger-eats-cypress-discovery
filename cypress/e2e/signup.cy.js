import singup from '../pages/SingUpPage'


describe('Signup', () => { 

    beforeEach(function() {
        cy.fixture('deliver').then((d) => { 
            this.deliver = d
        })
    })
    

    it('User should be deliver', function() {

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        singup.go()
        singup.fillForm(this.deliver.signup)
        singup.submit()
        singup.modalContentShouldBe(expectedMessage)

    })


    it('Incorrect document', function() {

        singup.go()
        singup.fillForm(this.deliver.cpf_inv)
        singup.submit()
        singup.alertMessageShouldBe('Oops! CPF inválido')
        
    })
})


