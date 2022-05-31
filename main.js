document.addEventListener('DOMContentLoaded', () => {
  const customerContainer = document.querySelector('.directory-container')

  customers.forEach((customer) => {
    const ul = document.createElement('ul')
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('img')).src = customer.picture.large
    ul
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createElement('h2')
      ).innerHTML = `${customer.name.first} ${customer.name.last}`
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('p')).innerHTML = customer.email
    ul
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createElement('p')
      ).innerHTML = `${customer.location.street.number} 
		${customer.location.street.name} <br /> 
		${customer.location.city}, ${customer.location.state}
		${customer.location.postcode}`
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('p')).innerHTML = `DOB: ${moment
      .utc(customer.dob.date)
      .format('MMM DD, YYYY')}`
    ul
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createElement('p')
      ).innerHTML = `Customer since: ${moment
      .utc(customer.registered.date)
      .format('MMM DD, YYYY')}`

    customerContainer.appendChild(ul)
  })
})
