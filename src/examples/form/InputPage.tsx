import { useState } from "react"

import CustomButton from "@/components/CustomButton"
import CustomInput from "@/components/CustomInput"
import "@/examples/examples.scss"
import { formatPhoneNumber, insertCommas } from "@/utils"

const InputPage = () => {
  const [basicValue, setBasicValue] = useState<string>("")
  const [numberValue, setNumberValue] = useState<number>()
  const [formatNumberValue, setFormatNumberValue] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [requiredValue, setRequiredValue] = useState<string>("")

  const [triggerValidation, setTriggerValidation] = useState<boolean>(false)

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value)
  }

  const formatterNumberCommas = (value: string) => {
    setFormatNumberValue(value)
  }

  const handleRequiredValidation = () => {
    setTriggerValidation(true)
  }

  const regPhoneNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
  const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const regNumber = /^[\d,]*$/

  return (
    <div>
      <div className="examples-wrapper">
        <div>
          <h2>1. Basic Input</h2>
          <div className="example-area">
            <div className="example-item">
              <CustomInput
                defaultValue={basicValue}
                type="text"
                placeholder="text input"
                onChange={setBasicValue}
              />
            </div>
          </div>
        </div>
        <div>
          <h2>2. Number Input</h2>
          <div className="example-area">
            <div className="example-item">
              <CustomInput
                defaultValue={numberValue}
                type="number"
                placeholder="number input"
                onChange={setNumberValue}
              />
              <CustomInput
                defaultValue={formatNumberValue}
                type="text"
                formatFunction={insertCommas}
                validationPattern={regNumber}
                validationMessage="Only Number Input Plz"
                placeholder="NumberFormatter"
                onChange={formatterNumberCommas}
              />
            </div>
          </div>
        </div>
        <div>
          <h2>3. Pattern Input</h2>
          <div className="example-area">
            <div className="example-item">
              <div>
                <CustomInput
                  defaultValue={phoneNumber}
                  type="text"
                  placeholder="input your phone number"
                  formatFunction={formatPhoneNumber}
                  validationPattern={regPhoneNumber}
                  validationMessage="Invalid phone number format"
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div>
                <CustomInput
                  defaultValue={email}
                  type="text"
                  placeholder="input your E-mail Address"
                  validationPattern={regEmail}
                  validationMessage="Invalid email format"
                  onChange={setEmail}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>4. Required Input</h2>
          <div className="example-area">
            <div className="example-item">
              <div>
                <CustomInput
                  defaultValue={requiredValue}
                  type="text"
                  isRequired={true}
                  triggerValidation={triggerValidation}
                  formatFunction={formatPhoneNumber}
                  placeholder="Invalid phone number format"
                  validationPattern={regPhoneNumber}
                  validationMessage="Not Correct Pattern"
                  onChange={setRequiredValue}
                />
              </div>
              <div>
                <CustomButton
                  $primary
                  name="Required Check"
                  triggerValidation={handleRequiredValidation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputPage
