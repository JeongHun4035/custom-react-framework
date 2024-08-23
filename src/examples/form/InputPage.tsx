import { useState } from "react"

import CustomInput from "@/components/CustomInput"
import "@/examples/examples.css"
import { formatPhoneNumber } from "@/utils"

const InputPage = () => {
  const [basicValue, setBasicValue] = useState<string>("")
  const [numberValue, setNumberValue] = useState<number>()
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value)
  }

  const regPhoneNumber = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
  const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

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
            </div>
          </div>
        </div>
        <div>
          <h2>3. Valid Input</h2>
          <div className="example-area">
            <div className="example-item">
              <div>
                <CustomInput
                  defaultValue={phoneNumber}
                  type="text"
                  placeholder="input your phone number"
                  formatFunction={formatPhoneNumber}
                  validationPattern={regPhoneNumber}
                  validationMessage="Not corret Pattern"
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div>
                <CustomInput
                  defaultValue={email}
                  type="text"
                  placeholder="input your E-mail Address"
                  validationPattern={regEmail}
                  validationMessage="Not corret Pattern"
                  onChange={setEmail}
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
