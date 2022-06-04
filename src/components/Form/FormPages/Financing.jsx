import React from 'react'

function Financing({ formData, setFormData }) {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div>
        Financing is not available for this vehicle, you are expected to pay in
        full. {'\n'} Are you fine with that?
      </div>
      <fieldset className="flex items-center space-x-10">
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            id="yesbtn"
            name="financing"
            value={true}
            onClick={() => setFormData({ ...formData, financing: true })}
          />

          <label htmlFor="yesbtn">Yes</label>
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="radio"
            id="nobtn"
            name="financing"
            value={false}
            onClick={() => setFormData({ ...formData, financing: false })}
            defaultChecked
          />
          <label htmlFor="nobtn">No</label>
        </div>
      </fieldset>
    </div>
  )
}

export default Financing
