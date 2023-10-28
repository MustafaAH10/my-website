// blogData.js
const codeString1 = `from sklearn.feature_extraction.text import CountVectorizer

#Vocabulary
vocabulary = ['apple', 'banana', 'cherry', 'date', 'fruit']

# Sample sentences
sentences = ["The apple and banana are both delicious.", "I ate an apple and had some cherry pie.", "Today's fruit salad has apple and date.", "Banana is my favorite fruit."]

# Initializing CountVectorizer with our vocabulary
vectorizer = CountVectorizer(vocabulary=vocabulary)

# Fitting to sentences and transforming them into BoW vectors
X = vectorizer.transform(sentences).toarray()

# Displaying the sentences and their vectors
for sentence, vector in zip(sentences, X):
\tprint(f"Sentence: {sentence}")
\tprint(f"Vector: {vector.tolist()}")

# You should see the same output as in the above code block
`;

const codeString2 = `from sklearn.feature_extraction.text import TfidfVectorizer

# Sample documents
documents = ["The apple and banana are both delicious.", "I ate an apple and had some cherry pie.", "Today's fruit salad has apple and date.", "Banana is my favorite fruit."]

# TF-IDF
vectorizer= TfidfVectorizer()
X = vectorizer.fit_transform(documents)

# Extract feature names from the vectorizer
feature_names = vectorizer.get_feature_names_out()
print(feature_names)

# Loop through each document and its corresponding TF-IDF vector
for doc, vector in zip(documents, X.toarray()):
\tprint("Document:", doc)
\tfor word, score in zip(feature_names, vector):
\t\tprint(f"{word}: {score:.4f}")
`;

const blogPosts = [
	{
		id: "1",
		title: "An Overview of Natural Language Processing",
		content: (
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
						<em>Natural Language Understanding (NLU)</em>: How machines
						understand human language
					</li>
					<li>
						<u>Natural Language Generation (NLG)</u>: How machines generate
						human-like language
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
				<strong>
					<u>Tokenization</u>
				</strong>
				<p>
					Tokens are words, punctuation marks, or can even be subwords in some
					tokenization schemes. There are various kinds of tokenizers available:
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
						Pre-trained Tokenizers: Utilized in modern transformer models (e.g.,
						BERT, GPT-2/3, RoBERTa). These tokenizers are trained on large
						datasets and can tokenize text into word and subword units based on
						the patterns they've learned.
					</li>
					<pre>
						<code>
							# Sample Data <br />
							corpus = "Space exploration is the ongoing discovery and
							exploration of celestial structures in outer space by means of
							continuously evolving and growing space technology. While the
							study of space is carried out mainly by astronomers with
							telescopes, the physical exploration of space is conducted both by
							astronauts in orbiting spacecraft and by robotic spacecraft. Some
							of the most significant advancements in space exploration have
							occurred in recent decades, including landing humans on the Moon
							and the development of reusable rockets. "
						</code>
					</pre>
				</p>
				<br />
				<strong>
					<u>Text Normalization</u>
				</strong>
				<p>
					This is another crucial step in the data pre-processing cycle. This
					could include a variety of popular techniques like stemming or
					lemmatization.
					<li>
						<strong>Stemming:</strong>
					</li>
					<p>
						Stemming is less complex and more straight-forward as it often just
						removes the last part of words without taking into account the
						correct grammar or the correct base word.
					</p>
					<li>
						<strong>Lemmatization:</strong>
						<br />
					</li>
				</p>
				<pre>
					<code>pip install nltk</code>
					<br />
				</pre>
				<pre>
					<code>
						import nltk <br />
						nltk.download('wordnet')
					</code>
				</pre>
				<pre>
					<code>
						from nltk.stem import WordNetLemmatizer <br /> <br />
						lemmatizer = WordNetLemmatizer() <br /> <br />
						words = ["running", "flies", "happily"] <br />
						lemmatized_words = [lemmatizer.lemmatize(word) for word in words]{" "}
						<br /> <br />
						print(lemmatized_words) <br /># ['running', 'fly', 'happily']
					</code>
				</pre>{" "}
				<br></br>
				<strong>
					<u>Word Embeddings</u>
				</strong>
				<br />
				<p>
					A natural next step after text normalization is to represent the text
					using a processing algorithm applicable to your use case. To do this,
					we would need to convert the vector of words into numreical vectors
					and there are a variety of ways of doing this - the most simple being
					binary encoding.
					<br />
				</p>
				<li>
					<strong>Bag of Words (BoW)</strong>
					<br />
				</li>
				<p>
					The BoW model is a representation of text where each word in a
					document is represented by a number indicating its frequency in the
					document. Binary encoding is used in this approach where intuitively
					'1' suggests the presence of a word and '0' suggests its absence.
					Often times, you will omit unnecessary words like 'the', 'a' and 'or'
					as they frequently appear in complete, coherent sentences but actually
					add little value to the semantics.
				</p>
				<pre>
					<code>
						Vocabulary: ['apple', 'banana', 'cherry', 'date', 'fruit'] <br />
						<br />
						Sentence: "The apple and banana are both delicious." <br></br>
						Vector: [1, 1, 0, 0, 0] <br></br>
						Sentence: "I ate an apple and had some cherry pie." <br></br>
						Vector: [1, 0, 1, 0, 0] <br></br>
						Sentence: "Today's fruit salad has apple and date." <br></br>
						Vector: [1, 0, 0, 1, 1] <br></br>
						Sentence: "Banana is my favorite fruit." <br></br>
						Vector: [0, 1, 0, 0, 1] <br></br>
					</code>
				</pre>
				<p>
					While you can manually create the vectors by maintaning a dictionary,
					thankfully there is a scikit-learn library and function for this!
				</p>
				<pre>
					<code>{codeString1}</code>
				</pre>
				<li>
					<strong>Term Frequency - Inverse Document Frequency (TF-IDF)</strong>
				</li>
				<br />
				<p>
					TF-IDF is commonly used when the corpus (collection) of texts has
					multiple documents. It is useful for measuring the importance of a
					term within a document relative to the collection of documents. Thus,
					tokens are ultimately given an importance value after a 3-step
					approach.
				</p>
				<strong>Step 1: Term Frequency (TF)</strong>
				<p>
					Term Frequency is a measure of how frequently a term appears in a
					given text (a single document) <br />
					Given a term <em>t</em> and document <em>d</em>, the TF is:
				</p>
				<img src="/TF-formula.jpg" style={{ width: "400px", height: "auto" }} />
				<br />
				<br />
				<strong>Step 2: Inverse Document Frequency (TF-IDF)</strong>
				<p>
					Inverse Document Frequency is a measure of how rare or common a term
					is across all documents.
					<br />
					Given a term <em>t</em> and a set of documents <em>D</em>, the IDF is:
				</p>
				<img
					src="/IDF-formula.jpg"
					style={{ width: "400px", height: "auto" }}
				/>
				<br />
				<br />
				<strong>Step 3:</strong>
				<p>
					Inverse Document Frequency is a measure of how rare or common a term
					is across all documents.
					<br />
					Given a term <em>t</em> and a set of documents <em>D</em>, the IDF is:
				</p>
				<img
					src="/TF-IDF-formula.jpg"
					style={{ width: "400px", height: "auto" }}
				/>
				<br />
				<br />
				<pre>
					<code>{codeString2}</code>
				</pre>
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
