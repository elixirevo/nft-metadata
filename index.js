const fs = require('fs')

const baseData = require('./randomed-metadata.json')

let imghashdata = []
let metadata = []
function genMetadata(
  name,
  imgURL,
  homepage,
  background,
  body,
  clothes,
  eyes,
  head,
  mouth,
  accessory
) {
  return {
    name: name,
    image: imgURL,
    external_url: homepage,
    attributes: [
      {
        trait_type: 'Background',
        value: background,
      },
      {
        trait_type: 'Body',
        value: body,
      },
      {
        trait_type: 'Clothes',
        value: clothes,
      },
      {
        trait_type: 'Eyes',
        value: eyes,
      },
      {
        trait_type: 'Head',
        value: head,
      },
      {
        trait_type: 'Mouth',
        value: mouth,
      },
      {
        trait_type: 'Accessory',
        value: accessory,
      },
    ],
  }
}

for (let i = 0; i < baseData.length; i++) {
  let name = `NFT #${i + 1}`
  let imgURL = `https://url.mypinata.cloud/ipfs/${imghashdata[i]}`
  let external_url = 'https://url.io'
  let background = baseData[i].background
  let body = baseData[i].body
  let clothes = baseData[i].clothes
  let eyes = baseData[i].eyes
  let head = baseData[i].head
  let mouth = baseData[i].mouth
  let accessory = baseData[i].accessory
  let data = genMetadata(
    name,
    imgURL,
    external_url,
    background,
    body,
    clothes,
    eyes,
    head,
    mouth,
    accessory
  )
  metadata.push(data)
}

const saveData = (data) => {
  const finished = (error) => {
    if (error) {
      console.error(error)
      return
    }
  }

  const jsonData = JSON.stringify(data, null, 2)
  fs.writeFile('final-metadata.json', jsonData, finished)
}

saveData(metadata)
