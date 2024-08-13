import "@/pages/aboutUs/aboutUs.scss";

const NFTIntro = () => {
  return (
    <div className="about-us-container to-top">
      <div className="w-default py-8">
        <section className="about-us-header">
          <h1 className="font-[ftnB] mb-4">What is an NFT?</h1>
          <p>
            <span className="font-[ftnB]">NFT (Non-Fungible Token)</span> is a
            type of digital asset that represents ownership or proof of
            authenticity of a unique item or piece of content, secured and
            verified on a blockchain. Unlike fungible tokens such as Bitcoin or
            Ethereum, which are identical and can be exchanged one for another,
            each NFT is distinct and cannot be replaced with another.
          </p>
        </section>

        <section className="about-us-features mb-6 mt-[40px]">
          <h2 className="font-semibold mb-4">Key Features</h2>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">1. Uniqueness</h3>
            <p>
              Each NFT has a unique identifier that distinguishes it from other
              tokens. This means that every NFT is one-of-a-kind. For example, a
              specific digital artwork might have its own NFT, and no two NFTs
              are exactly the same.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">2. Indivisibility</h3>
            <p>
              NFTs cannot be divided into smaller units. You either own the
              entire NFT or none of it. This is different from fungible tokens,
              which can be divided into smaller parts.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">3. Scarcity</h3>
            <p>
              The number of NFTs for a particular asset is usually limited. This
              scarcity can enhance the value of the NFT. For instance, an
              artwork may only have a few NFTs associated with it.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">4. Ownership and Authenticity</h3>
            <p>
              Ownership of NFTs is recorded on the blockchain, providing a
              transparent and immutable record of ownership and transaction
              history. This ensures the authenticity and provenance of digital
              assets.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">5. Interoperability</h3>
            <p>
              NFTs can be used across different platforms and applications,
              allowing them to be traded, displayed, or utilized in various
              contexts.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">6. Programmability</h3>
            <p>
              NFTs can incorporate smart contracts, which are programmable
              scripts that can enforce rules and automate processes. This might
              include automated royalty payments to creators on secondary sales.
            </p>
          </div>
        </section>

        <section className="about-us-features mb-6 mt-[40px]">
          <h2 className="font-semibold mb-4">Applications</h2>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">1. Digital Art</h3>
            <p>
              NFTs are widely used to represent ownership of digital artworks.
              Artists can sell their work as NFTs and earn royalties from future
              sales.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">2. Collectibles</h3>
            <p>
              Digital collectibles, such as trading cards or virtual pets, are
              often represented as NFTs. These collectibles can be bought, sold,
              and traded.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">3. Virtual Real Estate</h3>
            <p>
              In virtual worlds or metaverses, NFTs can represent ownership of
              virtual land or property.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">4. Music and Entertainment</h3>
            <p>
              Musicians and content creators use NFTs to sell music, tickets, or
              exclusive content directly to their fans.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">5. Gaming</h3>
            <p>
              In video games, NFTs can represent in-game items, characters, or
              assets that players can own and trade.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NFTIntro;
