from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Create a list of all unique skills across mentors and mentees
all_skills = ['Python', 'AI', 'Data Science', 'JavaScript', 'React', 'Web Development', 'Machine Learning']

# Manually create vectors (in practice, you can automate this based on your data)
mentor_skills = [
    [1, 1, 1, 0, 0, 0, 0],  # Alice: Python, AI, Data Science
    [0, 0, 0, 1, 1, 1, 0],  # Bob: JavaScript, React, Web Development
    [1, 1, 0, 0, 0, 0, 1],  # Charlie: Python, AI, Machine Learning
]

mentee_skills = [
    [1, 1, 0, 0, 0, 0, 0],  # David: Python, AI
    [0, 0, 0, 1, 0, 1, 0],  # Eve: JavaScript, Web Development
]

# Compute similarity between each mentee and all mentors
for mentee in mentee_skills:
    similarity_scores = cosine_similarity([mentee], mentor_skills)
    print(similarity_scores)
