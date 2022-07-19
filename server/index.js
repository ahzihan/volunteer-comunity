require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const port = process.env.PORT || 5000;


const app = express();

app.use( cors() );
app.use( express.json() );



const { MongoClient, ServerApiVersion } = require( 'mongodb' );
const uri = `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASS }@cluster0.vbsda9w.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 } );


async function run() {
    try {
        const VolunteerCollection = client.db( "VolunteerDB" ).collection( "volunteer" );



    }
    finally {

    }
}
run().catch( console.dir );


app.get( '/', ( req, res ) => {
    res.send( 'Welcome' );
} );

app.listen( port, () => {
    console.log( 'DB Running http//:localhost', port );
} );