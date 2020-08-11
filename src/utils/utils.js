const log = console.log.bind(console)

const e = function(selector) {
  let element = document.querySelector(selector)
  if (element === null) {
    let s = `Element not found, selector ${selector} is wrong or js is not in the body`
    log(s)
    return null
  } else {
    return element
  }
}

const envs = {
  appId: process.env.REACT_APP_AGORA_APP_ID,
  token: process.env.REACT_APP_AGORA_TOKEN
}

export { 
  log,
  e,
  envs,
}