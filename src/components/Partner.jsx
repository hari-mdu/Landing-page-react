import React from 'react'
import '../css/custom.css';
import Companies from '../assets/img/companies.PNG'

const Partner = () => {
  return (
    <div class="partner">
        <div class="container-1">
            <span>WHERE WE DO</span>
            <h1>Recognized by the best</h1>
            <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in
                post-contract fees and fines.</p>
        </div>

        <div class="container-2">
            <img src={Companies} alt=""/>
        </div>

    </div>
  )
}

export default Partner