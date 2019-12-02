import React, { useState, useEffect } from 'react'

export default function Greeting() {
  const [prettyYou, setPrettyYou] = useState()

  useEffect(() => {
    getGreeting()
  })

  function getGreeting() {
    const now = Date.now()
    let date = new Date(now)
    date = JSON.stringify(date)
    let currentTime = parseInt('' + date[12] + date[13])
    currentTime += 1

    let greetingYou = ''

    if (currentTime >= 6 && currentTime < 12) {
      greetingYou = 'Good Morning'
    } else if (currentTime >= 12 && currentTime < 18) {
      greetingYou = 'Good Afternoon'
    } else if (currentTime >= 18) {
      greetingYou = 'Good Evening'
    } else greetingYou = 'Good Night '

    getPretty(greetingYou)
  }

  function getPretty(greetingYou) {
    const prettyArray = ['Munchkin', 'Sausage', 'Puppet', 'Piglet', 'Cookie', 'Beautiful', 'Pumpkin', 'Little troll', 'Little cabbage', 'My flea', 'Honey', 'Cookie', 'Darling']
    const pretty = prettyArray[Math.floor(Math.random() * (prettyArray.length))]
    const prettyGreeting = `${greetingYou} ${pretty}`
    setPrettyYou(prettyGreeting)
  }

  return (
    <div>
      <h1 className=''>{prettyYou}</h1>
    </div>
  )
}