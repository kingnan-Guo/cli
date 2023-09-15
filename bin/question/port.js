export default () => {
    return {
        type: 'input',
        name: 'port',
        default: () => {
            return 7777
        },
        message: 'set port number',
        validate(val) {
            if(val > 0 ) {
                return true
            }
            return "plass enter number is  0~152200"
        }
    }
}