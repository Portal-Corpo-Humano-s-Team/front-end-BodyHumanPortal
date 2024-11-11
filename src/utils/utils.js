import router from '@/router'

class DateFormatter {
  // Método para converter a data DD-MM-YYYY para ISO (YYYY-MM-DD)
  static getIsoDate(dateInput) {
    // Transforma dateInput em uma data ISO válida (YYYY-MM-DD)
    const date = new Date(dateInput)
    if (!isNaN(date)) {
      return date.toISOString().split('T')[0]
    }
    return null
  }
  static convertToISO(day, month, year) {
    // Valida se todos os campos estão preenchidos
    if (day && month && year) {
      // Formata a data no formato ISO (YYYY-MM-DD)
      const isoDate = new Date(year, month - 1, day).toISOString().split('T')[0]

      // Exibe a data formatada no HTML
      return isoDate
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  // Método para formatar a data no estilo DD/MM/YYYY
  static formatBirthday(dateInput) {
    const isoDate = this.getIsoDate(dateInput)
    if (isoDate) {
      const [year, month, day] = isoDate.split('-')
      return `${day}/${month}/${year}` // Formato DD/MM/YYYY
    }
  }
}

class RedirectManager {
  static redirectToLogin() {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('login')
    }
  }

  // static redirectToLastPage() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const redirectUrl = urlParams.get("redirect"); // Pega o parâmetro 'redirect' da query string

  //   if (urlParams) {
  //     window.location.href = `${encodeURIComponent(redirectUrl)}`;
  //   } else {
  //     window.location.href = "/public/dashboard/myDashboard.html";
  //   }
  // }
}

class UserManeger {
  static async getEmails() {
    try {
      const token = localStorage.getItem('token')
      const sentEmails = await fetch('http://localhost:3000/users/sentEmail', {
        method: 'GET',
        headers: {
          content: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (sentEmails.ok) {
        const emails = await sentEmails.json() // Transformar a resposta em JSON
        const tableBody = document
          .getElementById('emailsTable')
          .querySelector('tbody')

        // Limpar a tabela antes de adicionar novos dados
        tableBody.innerHTML = ''

        // Adicionar cada e-mail à tabela
        emails.forEach(email => {
          const row = document.createElement('tr')

          // Formatar a data para exibição
          const formattedDate = DateFormatter.formatBirthday(email.dateSent)

          row.innerHTML = `
            <td>${email.subject}</td>
            <td>${email.question}</td>
            <td>${formattedDate}</td>
          `

          tableBody.appendChild(row)
        })
      } else {
        console.error('Erro ao carregar os e-mails.')
      }
    } catch (error) {}
  }

  static async deleteUser() {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          content: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        alert('Usuário deletado com sucesso!')
        localStorage.removeItem('token')
        RedirectManager.redirectToLogin()
      }
    } catch (error) {
      console.error('Erro ao deletar o usuário.' + error)
    }
  }
  static logoutUser() {
    localStorage.removeItem('token')
    router.push('/login')
  }
}
export { DateFormatter, RedirectManager, UserManeger }
