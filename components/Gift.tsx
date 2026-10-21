'use client';

import { useState } from 'react';

export default function Gift() {
  const [openBank, setOpenBank] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000); // Pesan "Copied!" hilang setelah 2 detik
  };

  const banks = [
    {
      id: 'jpmorgan',
      name: 'JP. MORGAN CHASE BANK, N.A.',
      code: '(032)',
      account: '312123401338006',
      holder: '(Malaysia Ringgit) [WISE] Larry Christofal Jeremiah',
      qrImage: '/qr-jpmorgan.jpg' // Nanti kamu bisa masukkan file QR code ke folder public
    },
    {
      id: 'bca',
      name: 'BANK BCA',
      code: '',
      account: '7890365145',
      holder: 'Larry Christofal Jeremiah',
      qrImage: '/qr-bca.jpg'
    }
  ];

  return (
    <div className="w-full text-center px-6 py-16 bg-offwhite">
      <h3 className="text-2xl font-serif mb-4 text-dark">Wedding Gift</h3>
      <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto mb-10">
        Your presence and blessings are more than enough for us. But if you wish to bless us with a gift, a Digital Envelope is available for your convenience. Thank you for celebrating with us!
      </p>

      <div className="space-y-4 max-w-sm mx-auto">
        {banks.map((bank) => (
          <div key={bank.id} className="border border-sage-200 rounded-xl overflow-hidden shadow-sm">
            {/* Header Tombol Bank */}
            <button
              onClick={() => setOpenBank(openBank === bank.id ? null : bank.id)}
              className="w-full bg-sage-200/50 px-5 py-4 flex justify-between items-center text-sm font-medium text-dark hover:bg-sage-200 transition-colors"
            >
              <span>{bank.name} {bank.code}</span>
              <span className="text-lg">{openBank === bank.id ? '−' : '+'}</span>
            </button>

            {/* Konten Dropdown (Nomor Rekening & QR) */}
            <div
              className={`transition-all duration-300 ease-in-out bg-white ${
                openBank === bank.id ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <div className="px-5 text-left flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Account Number</p>
                  <p className="text-lg font-semibold text-dark flex items-center gap-2">
                    {bank.account}
                    <button
                      onClick={() => handleCopy(bank.account)}
                      className="text-xs px-2 py-1 bg-sage-500/10 text-sage-500 rounded hover:bg-sage-500 hover:text-white transition"
                    >
                      {copiedText === bank.account ? 'Copied!' : 'Copy'}
                    </button>
                  </p>
                  <p className="text-xs text-gray-500 mt-3 mb-1">Account Name</p>
                  <p className="text-sm font-medium text-dark">{bank.holder}</p>
                </div>
                
                {/* Kotak QR Code */}
                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center border border-gray-200 relative overflow-hidden">
                  <span className="text-[10px] text-gray-400">QR Code</span>
                  {/* <Image src={bank.qrImage} alt="QR Code" fill className="object-cover" /> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}