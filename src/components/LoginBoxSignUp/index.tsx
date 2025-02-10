import { useState } from 'react'
import { SignUp } from '../../services/project-api'
import { BoxSignUp, FormSignUp } from './styles'
import { FaUser } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

export function LoginBoxSignUp() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function signUp(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    setIsSubmitting(true)

    const resultado = await SignUp(
      ev.currentTarget.nameSignUp.value,
      ev.currentTarget.emailSignUp.value,
      ev.currentTarget.usernameSignUp.value,
      ev.currentTarget.passwordSignUp.value,
    )

    alert(resultado.message || 'erro inesperado')
    setIsSubmitting(false)
  }

  return (
    <BoxSignUp className="form form-signup">
      <h2>Cadastre-se</h2>
      <FormSignUp onSubmit={signUp}>
        <div className="field">
          <input
            type="text"
            id="nameSignUp"
            name="nameSignUp"
            placeholder=""
            required
          />
          <label htmlFor="nameSignUp">Nome: </label>
          <div className="icon-box">
            <FaUser className="icon" />
          </div>
        </div>

        <div className="field">
          <input
            type="text"
            id="emailSignUp"
            name="emailSignUp"
            placeholder=""
            required
          />
          <label htmlFor="emailSignUp">Email: </label>
          <div className="icon-box">
            <IoIosMail className="icon" />
          </div>
        </div>

        <div className="field">
          <input
            type="text"
            id="usernameSignUp"
            name="usernameSignUp"
            placeholder=""
            required
          />
          <label htmlFor="usernameSignUp">Nome de usuário: </label>
          <div className="icon-box">
            <FaRegUserCircle className="icon" />
          </div>
        </div>

        <div className="field">
          <input
            type="passwordSignUp"
            id="passwordSignUp"
            name="passwordSignUp"
            placeholder=""
            required
          />
          <label htmlFor="passwordSignUp">Senha: </label>
          <div className="icon-box">
            <FaEye className="icon" />
          </div>
        </div>

        <button className="register" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Verificando dados...' : 'Registrar-se'}
        </button>
      </FormSignUp>
    </BoxSignUp>
  )
}
