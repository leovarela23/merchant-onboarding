import React, { useState } from 'react';
import { MerchantData, USE_CASE_OPTIONS } from '../types';

export function MerchantForm() {
  const [formData, setFormData] = useState<MerchantData>({
    domain: '',
    name: '',
    merchant: {
      merchantJurisdiction: '',
      legalEntityName: '',
      companyRegistrationNumber: '',
      primaryUseCase: USE_CASE_OPTIONS[0],
      iban: ''
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/member/sub-tpps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token-json-error': 'true'
        },
        body: JSON.stringify({
          ...formData,
          parentSubTppId: '4fc38ab9-5b87-4116-a007-92304e98665e'
        })
      });

      const responseData = await response.text();

      if (!response.ok) {
        throw new Error(responseData || 'Failed to submit onboarding request');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Onboarding request submitted successfully!'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit onboarding request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-8">
          Merchant Onboarding Form
        </h3>

        {submitStatus && (
          <div
            className={`p-4 mb-6 rounded-md ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                Domain
              </label>
              <input
                type="url"
                id="domain"
                required
                placeholder="https://www.example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Merchant Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Example Corp"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="jurisdiction" className="block text-sm font-medium text-gray-700">
                Merchant Jurisdiction
              </label>
              <input
                type="text"
                id="jurisdiction"
                required
                placeholder="DE"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.merchant.merchantJurisdiction}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant: {
                      ...formData.merchant,
                      merchantJurisdiction: e.target.value
                    }
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="legalEntity" className="block text-sm font-medium text-gray-700">
                Legal Entity Name
              </label>
              <input
                type="text"
                id="legalEntity"
                required
                placeholder="Example Corp, Inc."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.merchant.legalEntityName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant: {
                      ...formData.merchant,
                      legalEntityName: e.target.value
                    }
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700">
                Company Registration Number
              </label>
              <input
                type="text"
                id="regNumber"
                required
                placeholder="1234567"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.merchant.companyRegistrationNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant: {
                      ...formData.merchant,
                      companyRegistrationNumber: e.target.value
                    }
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-700">
                Primary Use Case
              </label>
              <select
                id="useCase"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.merchant.primaryUseCase}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant: {
                      ...formData.merchant,
                      primaryUseCase: e.target.value
                    }
                  })
                }
              >
                {USE_CASE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="iban" className="block text-sm font-medium text-gray-700">
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                required
                placeholder="DE81100110012621774108"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                value={formData.merchant.iban}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    merchant: {
                      ...formData.merchant,
                      iban: e.target.value
                    }
                  })
                }
              />
            </div>
          </div>

          <div className="pt-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send onboarding request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}