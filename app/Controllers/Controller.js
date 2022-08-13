class Controller {

    constructor(response) {
        this.response = response;
    }

    sendResponse({msg, data, code = 200}) {
        const obj = { code: code, message: msg, data: data };
        console.log(obj);
        this.response.send(obj)
    }

    sendResponseAlter(msg, data, code = 200){
        const obj = { code: code, message: msg, data: data };
        this.response.send(obj)
    }

    handleException(error) {
        if (error.sql) {
            error.name = 'DbException';
        }

        switch (error.name) {
            case 'GeneralException':
                this.response.status(501).json({ error: error.message });
                break;
            case 'UnauthorizedException':
                this.response.status(401).json({ error: error.message });
                break;
            case 'NotFoundException':
                this.response.status(404).json({ error: error.message });
                break;
            case 'ConflictException':
                this.response.status(409).json({ error: error.message });
                break;
            case 'ValidationException':
                this.response.status(422).json({ error: error.message });
                break;
            case 'ForbiddenException':
                this.response.status(403).json({ error: error.message });
                break;
            case 'BadRequestException':
                this.response.status(400).json({ error: error.message });
                break;
            case 'PermissionDeniedException':
                this.response.status(403).json({ error: error.message });
                break;
            default:
                this.response.status(501).json({ error: 'unable to process request!, please try later' });
                break;
        }
    }
}

module.exports = Controller;