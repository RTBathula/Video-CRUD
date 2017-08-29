import {listen,close} from '../src/app'
import {bootupDB} from '../src/dbsetup'
import {dropDatabase,connectionClose} from '../src/databases/mongo'

/*
  Bootup database and run express server in test env
*/
before((done) => {		
	bootupDB().then(() => {
	  return listen()
	}).then(nodeServer => {
		server = nodeServer
		done()
	})
});

/*
  Drop test db,close mongo connection and close server
*/
after((done) => {		
	dropDatabase().then(() => {
		return connectionClose(global.mongoCon)
	}).then(() => {
		return close(server)
	}).then(() => {		
		done()
	})
})

