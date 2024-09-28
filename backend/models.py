from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import available_skills
import available_interests
import profile

# Create a list of all unique skills across mentors and mentees
all_skills = available_skills.skills
all_interests = available_interests.interests

# #######################EXAMPLE CODE#############################
# all_skills = ['Python', 'AI', 'Data Science', 'JavaScript', 'React', 'Web Development', 'Machine Learning']
# # Manually create vectors (in practice, you can automate this based on your data)
# mentor_skills = [
#     [1, 1, 1, 0, 0, 0, 0],  # Alice: Python, AI, Data Science
#     [0, 0, 0, 1, 1, 1, 0],  # Bob: JavaScript, React, Web Development
#     [1, 1, 0, 0, 0, 0, 1],  # Charlie: Python, AI, Machine Learning
# ]

# mentee_skills = [
#     [1, 1, 0, 0, 0, 0, 0],  # David: Python, AI
#     [0, 0, 0, 1, 0, 1, 0],  # Eve: JavaScript, Web Development
# ]

# # Compute similarity between each mentee and all mentors
# for mentee in mentee_skills:
#     similarity_scores = cosine_similarity([mentee], mentor_skills)
#     print(similarity_scores)
# ################################################################

def calculate_similarity_skills(user: profile.UserProfile, another: profile.UserProfile) -> float:
    user_encode_skill = profile.encode_skills_one(user)
    another_encode_skill = profile.encode_skills_one(another)
    similarity_score = cosine_similarity(user_encode_skill, another_encode_skill)
    return similarity_score

def suggest_similarity_skills(user: profile.UserProfile, others: list[profile.UserProfile]):
    """
    Return a sorted dictionary of {user_id: similarity_score} by similarity_score, from highest to lowest
    """
    people_by_similarity = {}
    for person in others:
        people_by_similarity[person.user_id] = calculate_similarity_skills(user, person)
    
    sorted_people_by_similarity = sorted(people_by_similarity, key=lambda x: x[1], reverse=True)

    return sorted_people_by_similarity

def calculate_similarity_interests(user: profile.UserProfile, another: profile.UserProfile) -> float:
    user_encode_interest = profile.encode_interests_one(user)
    another_encode_interest = profile.encode_interests_one(another)
    similarity_score = cosine_similarity(user_encode_interest, another_encode_interest)
    return similarity_score

def suggest_similarity_interests(user: profile.UserProfile, others: list[profile.UserProfile]):
    people_by_similarity = {}
    for person in others:
        people_by_similarity[person.user_id] = calculate_similarity_skills(user, person)

    sorted_people_by_similarity = sorted(people_by_similarity, key=lambda x: x[1], reverse=True)