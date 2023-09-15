export default () => {
    return {
        type: 'input',
        name: 'packageName',
        message: 'set package name',
        validate(val){
            if (val) {
                return true
            } else {
                return "plass enter package name"
            }
        }
    }
}