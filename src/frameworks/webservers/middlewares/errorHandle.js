export default function errorHandle(err, req, res, next) {
    console.log(err.message);
    switch(err.message){

        case 'User already exist':
            res.status(409).send(err.message);
            break;

        case 'Appointment already exist':
            res.status(409).send(err.message)
            break;

        case 'User not found':
            res.status(404).send({ error: err.message });
            break;

        case 'Incorrect email or password':
            res.status(401).send(err.message)
            break;
        
        case 'Access token has expired':
            res.status(401).send(err.message)
            break;
        
        case 'Refresh token has expired':
            res.status(401).send(err.message)
            break;

        case 'Invalid token':
            res.status(401).send(err.message)
            break;
        
        case 'Unauthorized':
            res.status(401).send(err.message)

        case 'Access forbidden':
            res.status(403).send(err.message)
            break;

        default:
        res.status(500).send({ error: 'Something already broke!' });
    }
}