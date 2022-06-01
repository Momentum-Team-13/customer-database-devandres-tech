document.addEventListener('DOMContentLoaded', () => {
  const customerContainer = document.querySelector('.directory-container')

  customers.forEach((customer) => {
    const ul = document.createElement('ul')

    // image
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('img')).src = customer.picture.large

    // full name
    ul
      .appendChild(document.createElement('li'))
      .appendChild(
        document.createElement('h2')
      ).innerHTML = `${customer.name.first} ${customer.name.last}`

    // email
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('p')).innerHTML = customer.email

    // address
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('p')).innerHTML = `${
      customer.location.street.number
    } 
		${customer.location.street.name} <br /> 
		${customer.location.city}, ${nameToAbbr(customer.location.state)}
		${customer.location.postcode}`

    // date of birth
    ul
      .appendChild(document.createElement('li'))
      .appendChild(document.createElement('p')).innerHTML = `DOB: ${moment
      .utc(customer.dob.date)
      .format('MMM DD, YYYY')}`

    // registered date
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
