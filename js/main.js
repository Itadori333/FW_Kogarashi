window.addEventListener('load', () => {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('correo')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()

        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if (!usuarioValor) {
            //console.log('CAMPO VACIO')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Este campo esta vacío!',
                footer: 'Ingresa tu nombre completo, por favor'
            })
        } else {
            validaOk(usuario)
        }

        //validando campo email
        if (!emailValor) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Este campo esta vacío!',
                footer: 'Ingresa una dirección de correo electrónico, por favor'
            })
        } else if (!validaEmail(emailValor)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Este correo electrónico no es válido!',
                footer: '<a href="">Inténtalo nuevamente</a>'
            })
        } else {
            Swal.fire(
                '¡Formulario enviado correctamente!',
                'Gracias por escribirnos tus comentarios',
                'success'
            )
        }

        const validaFalla = (input, msje) => {
            const formControl = input.parentElement
            const aviso = formControl.querySelector('p')
            aviso.innerText = msje

            formControl.className = 'form-control falla'
        }
        const validaOk = (input, msje) => {
            const formControl = input.parentElement
            formControl.className = 'form-control ok'
        }

        const validaEmail = (email) => {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
    }
})

function enviar() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su pedido llegara dentro de 48 a 72 horas',
        showConfirmButton: false,
        timer: 1500
    })
}
