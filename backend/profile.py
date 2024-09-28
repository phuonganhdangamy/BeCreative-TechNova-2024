import backend.available_skills as available_skills #import list of available skills from available_skills file
import backend.available_interests as available_interests
import json

class UserProfile:
    def __init__(self, user_id, name, email, profile_picture, skills, interests, experience, education, location, role, bio, linkedin_url=None):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.profile_picture = profile_picture
        self.skills = skills  # List of skills
        self.interests = interests  # List of interests
        self.experience = experience  # Years or detailed description
        self.education = education  # Dictionary with degree and institution
        self.location = location
        self.role = role  # 'Mentor' or 'Mentee'
        self.bio = bio
        # NOTE: skills and interests are selected from available lists of all skills and interests

    def to_dict(self):
        """Convert the UserProfile instance to a dictionary for storage."""
        return {
            "user_id": self.user_id,
            "name": self.name,
            "email": self.email,
            "profile_picture": self.profile_picture,
            "skills": self.skills,
            "interests": self.interests,
            "experience": self.experience,
            "education": self.education,
            "location": self.location,
            "role": self.role,
            "bio": self.bio,
        }

    def update_profile(self, **kwargs):
        """Update profile fields."""
        for key, value in kwargs.items():
            if hasattr(self, key):
                setattr(self, key, value)
            else:
                raise AttributeError(f"{key} is not a valid attribute of UserProfile")

    def __str__(self):
        """String representation of the UserProfile instance."""
        return f"UserProfile({self.name}, ({self.role}))"

################################################################
# These will be methods/features we can work with our profile
################################################################

def find_people_by_role(users: list[UserProfile], role):
    role_people = {}
    for user in users:
        if user.role == role:
                role_people[str(user)] = user
    
    return role_people

def find_people_by_user_id(users: list[UserProfile], user_id):
    user_id_people = {}
    for user in users:
        if user.user_id == user_id:
                user_id_people[str(user)] = user
    
    return user_id_people

def find_people_by_name(users: list[UserProfile], name):
    name_people = {}
    for user in users:
        if user.name == name:
                name_people[str(user)] = user
    
    return name_people

def encode_skills_one(user: UserProfile):
    """
    Encode the skills into a list of 0s (the user doesn't have that skill) and 1s (the user has that skill)
    Use available_skills.py
    """
    encoded_skills = []
    for skill in available_skills:
        if skill in user.skills:
            encoded_skills.append(1)
        else:
            encoded_skills.append(0)
    return encoded_skills

def encode_skills_multiple(users: list[UserProfile]):
    """
    Encode the skills into a list of 0s (the user doesn't have that skill) and 1s (the user has that skill)
    """

def encode_interests_one(user: UserProfile):
    """
    Encode the interest into a list of 0s (the user doesn't have that interest) and 1s (the user has that interest)
    Use available_interests.py
    """
    encoded_interests = []
    for interest in available_interests:
        if interest in user.interests:
            encoded_interests.append(1)
        else:
            encoded_interests.append(0)
    return encoded_interests

def encode_interests_multiple(users: list[UserProfile]):
    """
    Encode the interest into a list of 0s (the user doesn't have that interest) and 1s (the user has that interest)
    """


def write_profile(self, user_id, name, email, profile_picture, skills, interests, experience, education, location, role, bio):
    
    #data to be written
    
    user_profile = {
        "user_id": self.user_id,
        "name": self.name,
        "email": self.email,
        "profile_picture": self.profile_picture,
        "skills": self.skills,
        "interests": self.interests,
        "experience": self.experience,
        "education": self.education,
        "location": self.location,
        "role": self.role,
        "bio": self.bio,
    }

    #serialize json
    json_object = json.dumps(user_profile, indent=11)

    #write to file.json
    with open("file.json", "w") as outfile:
        outfile.write(json_object)
    


def compare_user_id(users: list[UserProfile], user_id):
    """compare new user id to existing list of user ids
    returns 1 when valid
    returns 0 when invalid
    """
    for user in users:
        if user.user_id == user_id:
                return 0
    
    return 1
