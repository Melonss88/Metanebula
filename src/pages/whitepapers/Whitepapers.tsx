import "@/pages/aboutUs/aboutUs.scss";

const NFTIntro = () => {
  return (
    <div className="about-us-container to-top">
      <div className="w-default py-8">
        <section className="about-us-header">
          <h1 className="font-[ftnB] mb-4">MetaNebula Whitepaper</h1>
          <p>
            <span className="font-[ftnB]">MetaNebula</span> is an innovative NFT
            marketplace designed to revolutionize the way digital assets are
            created, traded, and transferred. Utilizing our native
            cryptocurrency, MNB, MetaNebula provides a seamless and efficient
            platform for minting NFTs, engaging in marketplace transactions, and
            transferring assets.
          </p>
        </section>

        <section className="about-us-vision mb-[40px] mt-[40px]">
          <h2 className="font-semibold mb-2">Overview</h2>
          <p>
            MetaNebula aims to offer a comprehensive solution for NFT
            enthusiasts, creators, and investors. Our platform supports the
            entire lifecycle of NFTs, from creation (minting) to trading on our
            marketplace and managing asset transfers. By leveraging the power of
            blockchain technology and the MNB token, MetaNebula ensures
            transparency, security, and efficiency in every transaction.
          </p>
        </section>

        <section className="about-us-features">
          <h2 className="font-semibold mb-4">Features</h2>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">1. NFT Minting</h3>
            <p>
              <span className="font-[ftnB]">Seamless Creation:</span>
              Users can easily mint NFTs with our intuitive interface, allowing
              for the creation of unique digital assets without requiring
              technical expertise.
            </p>
            <p>
              <span className="font-[ftnB]">Customizable Metadata:</span>
              Provide detailed metadata and attributes for each NFT, enhancing
              its value and uniqueness.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">2. Marketplace Trading</h3>
            <p>
              <span className="font-[ftnB]">Advanced Trading Platform:</span>
              Buy, sell, and auction NFTs within a dynamic marketplace
              environment.
            </p>
            <p>
              <span className="font-[ftnB]">Real-Time Analytics:</span>
              Access market trends, price history, and other relevant data to
              make informed trading decisions.
            </p>
          </div>

          <div className="feature-item mb-4">
            <h3 className="font-semibold">3. Asset Transfer</h3>
            <p>
              <span className="font-[ftnB]">Secure Transfers:</span>
              Transfer NFTs between users with confidence, supported by our
              robust security protocols.
            </p>
            <p>
              <span className="font-[ftnB]">Efficient Transactions:</span>
              Leverage MNB for fast and cost-effective asset transfers.
            </p>
          </div>
        </section>

        <section className="about-us-vision mb-6 mt-[40px]">
          <h2 className="font-semibold mb-2">MNB Cryptocurrency</h2>
          <p>
            <span className="font-[ftnB]">MNB</span> is the native
            cryptocurrency of the MetaNebula ecosystem. It powers all
            transactions within our platform, including NFT purchases, sales,
            and transfers. MNB ensures that all activities are conducted with
            low transaction fees and high efficiency.
          </p>
        </section>

        <section className="about-us-vision mb-6 mt-[40px]">
          <h2 className="font-semibold mb-2">Tokenomics</h2>
          <p>
            · <span className="font-[ftnB]">Total Supply: </span>
            [Specify the total supply of MNB tokens]
          </p>
          <p>
            · <span className="font-[ftnB]">Distribution: </span>
            [Outline the distribution strategy for MNB tokens]
          </p>
          <p>
            · <span className="font-[ftnB]">Utility: </span>
            MNB tokens can be used to pay for transaction fees, participate in
            governance, and access premium features on MetaNebula.
          </p>
        </section>

        <section className="about-us-vision mb-6 mt-[40px]">
          <h2 className="font-semibold mb-2">Technology</h2>
          <p>
            MetaNebula is built on cutting-edge blockchain technology to ensure
            the highest standards of security and scalability. Our platform
            integrates with major blockchain networks to provide a seamless user
            experience.
          </p>
        </section>

        <section className="about-us-vision mb-6 mt-[40px]">
          <h2 className="font-semibold mb-2">Technical Documentation</h2>
          <p>
            For a deeper understanding of our technology and architecture,
            please refer to our technical documentation and whitepapers. These
            resources offer comprehensive insights into our system design,
            security measures, and technical specifications.
          </p>
        </section>

        <section className="about-us-vision mb-6 mt-[40px]">
          <h2 className="font-semibold mb-2">Conclusion</h2>
          <p>
            MetaNebula is poised to set a new standard in the NFT marketplace
            space, combining innovation, security, and user-centric design. We
            invite you to join us on this exciting journey and become a part of
            the MetaNebula ecosystem.
          </p>
        </section>
      </div>
    </div>
  );
};

export default NFTIntro;
