import JWT from 'jsonwebtoken'

@registerDynamicValueClass
class AppStoreConnectToken {
  static identifier = 'com.gomore.PawExtensions.AppStoreConnect-Token'
  static title = 'AppStoreConnect Token'
  static inputs = [
    InputField('issuer_id', 'Issuer Id', "SecureValue"),
    InputField('key_id', 'Key Id', "SecureValue"),
    InputField('private_key', 'Private Key', "String"),
    InputField('expiration_minutes', 'Minutes before expiration', "Number", { persisted: true, defaultValue: 30 })
  ]

  evaluate(context) {
    let issuerId = this.issuer_id
    let keyId = this.key_id
    let privateKey = this.private_key
    let expiresIn = parseInt((new Date().getTime() / 1000) + this.expiration_minutes * 60)
    let algorithm = "ES256"

    let header = {
      alg: algorithm,
      kid: keyId,
      typ: "JWT"
    }
    let payload = {
      iss: issuerId,
      exp: expiresIn,
      aud: "appstoreconnect-v1"
    }
    return JWT.sign(payload, privateKey, { algorithm: algorithm, header: header })
  }
}
