const {
  after, afterEach, before, beforeEach, describe, it
} = require('mocha')
const chai = require('chai')
const { createSandbox } = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers-Villains', () => {
  let response
  let sandbox
  let stubbedCreate
  let stubbedSend
  let stubbedSendStatus
  let stubbedFindAll
  let stubbedFindOne
  let stubbedStatus
  let stubbedStatusDotSend
})
