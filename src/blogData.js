// blogData.js

const blogPosts = [
	{
		id: "1",
		title: "Beginner's Guide to Natural Language Processing (NLP)",
		content: (
			// {
			// 	type: "text",
			// 	value:
			// 		"NLP is the new 'in' thing and understandably so. Processing human language and semantics is an inherently difficult task but thankfullly, advances in machine learning have made this much easier.",
			// },
			// {
			// 	type: "text",
			// 	value: `
			//     Basic Components of NLP
			//     NLP can be broken down into two main components:
			//     	- Natural Language Understanding (NLU): How machines understand human language.
			//     	- Natural Language Generation (NLG): How machines generate human-like language.
			//     `,
			// },
			// { type: "code", value: "console.log(hello);" },
			// {
			// 	type: "image",
			// 	value: "path_to_your_image1.jpg", // For example: "/images/nlp-intro.jpg"
			// },
			// { type: "text", value: "This is a conclusion to the first post." },
			<>
				<p>
					NLP is the new 'in' thing and understandably so. Processing human
					language and semantics is an inherently difficult task but
					thankfullly, advances in machine learning have made this much easier.
				</p>
				<p>
					<strong>Basic Components of NLP</strong>
				</p>
				<ul>
					<li>
						<em>Natural Language Understanding (NLU)</em>: How machines...
					</li>
					<li>
						<u>Natural Language Generation (NLG)</u>: How machines...
					</li>
				</ul>
				<p>
					Just like most Machine Learning projects, pre-processing of data is
					important so that the dataset used for training is useful. This
					process involves transforming the raw text into a more manageable and
					structured format, making it easier for NLP algorithms to understand
					and analyze. Let's get hands on and explore some ways of
					pre-processing text into tokens - but wait what <em> are </em> tokens?
				</p>
				<p>
					Tokens are words, punctuation marks, or can even be subwords in some
					tokenization schemes. There are various open-source tokenizers
					available:
					<li>
						<strong>Basic:</strong>
						<br />
						Whitespace Tokenizer: Splits the text based on whitespace (spaces,
						tabs, newlines) - simple and fast, but not always accurate for
						languages where words can be combined without spaces.
					</li>
					<li>
						<strong>Intermediate:</strong>
						<br />
						N-gram Tokenizer: Produces n-grams from the text (sequences of n
						contiguous items from the text). Bi-grams (2-grams) take two words
						at a time, tri-grams (3-grams) take three, and so on.
					</li>
					<li>
						<strong>Advanced:</strong>
						<br />
						Subword Tokenizer: Splits text into subword units, which can be
						smaller than words but bigger than characters. Examples include
						Byte-Pair Encoding (BPE), Unigram Language Model Tokenization, and
						SentencePiece. Useful for handling out-of-vocabulary words in
						machine translation and other tasks.
					</li>
				</p>
				<pre>
					<code>console.log('hello');</code>
				</pre>
				<img src="path_to_your_image1.jpg" alt="NLP" />
				<p>This is a conclusion to the first post.</p>
			</>
		),
	},
	{
		id: "2",
		title: "Second Post",
		content: [{ type: "text", value: "Content of the second post." }],
	},
];

export default blogPosts;
