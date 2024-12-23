function What_is_Base64() {
    return (
        <div className="bg-gray-100 p-6 text-gray-800">
            <h1 className="mb-6 text-center text-3xl font-bold">What is Base64 Encoding</h1>
            <section className="mb-8">
                <p className="mb-4 text-lg">
                    Base64 is a binary-to-text encoding scheme. It represents binary data in a printable ASCII string format by
                    translating it into a radix-64 representation.
                </p>
                <p className="text-lg">
                    Base64 encoding is commonly used to transmit binary data over media that do not handle binary data properly,
                    designed to deal with textual data belonging to the 7-bit US-ASCII charset only. One example is Email (SMTP),
                    which traditionally worked with plain text data but extended to support non-text messages like audio and
                    images. Encoding to ASCII remains recommended for compatibility.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">How does Base64 Encoding work?</h2>
                <p className="mb-4 text-lg">
                    Base64 encoding works with a 65-character subset of the US-ASCII charset. The first 64 characters map to a
                    6-bit binary sequence, while the extra 65th character (<code>=</code>) is used for padding. The algorithm
                    processes input as 24-bit groups and converts them into 6-bit groups, which are then mapped to the Base64
                    alphabet.
                </p>
                <pre className="overflow-x-auto rounded-md bg-gray-200 p-4">
                    <code>
                        Input: ab@yz {'\n'}
                        Binary: 01100001 01100010 01000000 01111001 01111010 {'\n'}
                        Base64: YWJAeXo=
                    </code>
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Base64 Alphabet Table</h2>
                <table className="w-full table-auto rounded-md border border-gray-300 bg-white text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border-b px-4 py-2">Value</th>
                            <th className="border-b px-4 py-2">Encoding</th>
                            <th className="border-b px-4 py-2">Value</th>
                            <th className="border-b px-4 py-2">Encoding</th>
                            <th className="border-b px-4 py-2">Value</th>
                            <th className="border-b px-4 py-2">Encoding</th>
                            <th className="border-b px-4 py-2">Value</th>
                            <th className="border-b px-4 py-2">Encoding</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(16)].map((_, i) => (
                            <tr key={i}>
                                <td className="border-b px-4 py-2">{i * 4}</td>
                                <td className="border-b px-4 py-2">{String.fromCharCode(65 + i * 4)}</td>
                                <td className="border-b px-4 py-2">{i * 4 + 1}</td>
                                <td className="border-b px-4 py-2">{String.fromCharCode(65 + i * 4 + 1)}</td>
                                <td className="border-b px-4 py-2">{i * 4 + 2}</td>
                                <td className="border-b px-4 py-2">{String.fromCharCode(65 + i * 4 + 2)}</td>
                                <td className="border-b px-4 py-2">{i * 4 + 3}</td>
                                <td className="border-b px-4 py-2">{String.fromCharCode(65 + i * 4 + 3)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Base64 Encoding for URLs and Filenames</h2>
                <p className="mb-4 text-lg">
                    The "URL and Filename Safe" Base64 Encoding uses hyphen (<code>-</code>) and underscore (<code>_</code>) to
                    replace <code>+</code> and <code>/</code>. This variant ensures safe transmission in URLs and filenames.
                </p>
                <pre className="overflow-x-auto rounded-md bg-gray-200 p-4">
                    <code>
                        Input: "example" {'\n'}
                        Base64: ZXhhbXBsZQ== {'\n'}
                        URL-Safe: ZXhhbXBsZQ__
                    </code>
                </pre>
            </section>
        </div>
    );
}

export default What_is_Base64;