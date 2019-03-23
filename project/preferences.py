from stablemarriage.py as sm
from nltk.stem import SnowballStemmer
import copy
import random, string


example_input = {
    "group1" : [
        {},
        {}
    ],
    "group2" : [
        {},
        {}
    ],
    "scoring_weights": {
        "interests" : 1.0,
        "skills" : 5.0,
        "age" : 0.5,
        "gender" : 0.05
    }
}

class AlgorithmError(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)

def apply(input):
    default_weights = {
        "interests" : 1.0,
        "skills" : 5.0,
        "age" : 0.5,
        "gender" : 0.05
    }

    if "scoring_weights" in input:
        weights = overwriteWeights(default_weights, input["scoring_weights"])
    else:
        weights = default_weights

    validateInput(input)

    stableMarriageInput = {"optimal": {}, "pessimal": {}}

    mentor_scoring_list = {}
    mentee_scoring_list = {}

    for mentorObject in input["group1"]:
        mentor_scoring_list[mentorObject["name"]] = {}
        for menteeObject in input["group2"]:
            score = scoring_function(weights, mentorObject, menteeObject)
            mentor_scoring_list[mentorObject["name"]][menteeObject["name"]] = score


    for mentorObject in input["group2"]:
        mentee_scoring_list[menteeObject["name"]] = {}
        for mentorObject in input["group1"]:
            score = scoring_function(weights, menteeObject, mentorObject)
            mentee_scoring_list[menteeObject["name"]][mentorObject["name"]] = score

    tmp_mentor_scoring_list = copy.deepcopy(mentor_scoring_list)
    tmp_mentee_scoring_list = copy.deepcopy(mentee_scoring_list)

    for mentor in tmp_mentor_scoring_list:
        mentor_scoring_list[mentor] = map(lambda x:{"name": x, "similarity": mentor_scoring_list[mentor][x]}, mentor_scoring_list[mentor])
        mentor_scoring_list[mentor] = sorted(mentor_scoring_list[mentor], key=lambda k: k['similarity'], reverse=True)
        mentor_scoring_list[mentor] = map(lambda x: x["name"], mentor_scoring_list[mentor])

    for mentee in tmp_mentee_scoring_list:
        mentee_scoring_list[mentee] = map(lambda x:{"name": x, "similarity": mentee_scoring_list[mentor][x]}, mentee_scoring_list[mentee])
        mentee_scoring_list[mentor] = sorted(mentee_scoring_list[mentee], key=lambda k: k['similarity'], reverse=True)
        mentee_scoring_list[mentee] = map(lambda x: x["name"], mentee_scoring_list[mentee])


    group_difference = len(mentor_scoring_list) - len(mentee_scoring_list)
    set_aside = []
    if group_difference == 0.0:
        stable_marriage_input = {
            "optimal" : mentor_scoring_list,
            "pessimal" : mentee_scoring_list
        }
    else:
        if group_difference > 0:
            for i in range(group_difference):
                null_mentee = randomword(20)
                set_aside.append(null_mentee)
                mentee_scoring_list[null_mentee] = []
                for mentor in mentor_scoring_list:
                    mentor_scoring_list[mentor].append(null_mentee)
                    mentee_scoring_list[null_mentee].append(mentor)
        elif group_difference < 0:
            for i in range(group_difference):
                null_mentor = randomword(20)
                set_aside.append(null_mentor)
                mentor_scoring_list[null_mentor] = []
                for mentee in mentee_scoring_list:
                    mentee_scoring_list[mentee].append(null_mentor)
                    mentor_scoring_list[null_mentor].append(mentee)

        stable_marriage_input = {
        "optimal" : mentor_scoring_list,
        "pessimal" : mentee_scoring_list
        }

    stable_marriages = sm.pipe(stable_marriage_input).result(matches)

    if group_difference == 0.0:
        return stable_marriages
    elif group_difference > 0 || group_difference < 0:
        tmp = copy.deepcopy(stable_marriages)
        stable_marriages = dict((v,k) for k,v in tmp.iteritems())
        for person in null_people:
            stable_marriages.pop(person)
        return stable_marriages


def randomword(length):
    return ''.join(random.choice(string.lowercase) for i in range(length))

def scoring_function(weights, person1, person2):
    # returns a score that gives the similarity between 2 people
    # scoring function:
    #   +add for each interest * weight
    #   +add for each value * weight
    #   -subtract age difference * weight
    #   -subtract location difference * weight
    ss = SnowballStemmer("english")
    score = 0.0

    interest_list1 = person1["interests"]
    interest_list2 = person2["interests"]

    # compare similar interests
    for interest1 in interest_list1:
        for interest2 in interest_list2:
            stem1 = ss.stem(interest1.lower())
            stem2 = ss.stem(interest2.lower())

            if stem1 == stem2:
                score += weights["interests"]

    # compare similar values if it exists in each person
    if "skills" in person1 and "skills" in person2:
        values_list1 = person1["skills"]
        values_list2 = person2["skills"]

        for value1 in values_list1:
            for value2 in values_list2:
                stem1 = ss.stem(value1.lower())
                stem2 = ss.stem(value2.lower())

            if stem1 == stem2:
                score += weights["skills"]

    # compare age similarity if it exists for each person
    if "age" in person1 and "age" in person2:
        age1 = float(person1["age"])
        age2 = float(person2["age"])

        score -= abs(age1 - age2) * weights["age"]

    return score

def validateInput(input):
    # Validate the initial input fields
    if "group1" not in input and "group2" not in input:
        raise AlgorithmError("Please provide both the mentor and mentee groups")
    elif "group2" not in input:
        raise AlgorithmError("Please provide the mentee group.")
    elif "group1" not in input:
        raise AlgorithmError("Please provide the mentor group.")

    # The only required field for a user object is "name" and "interests"

        for person in input[gender]:
            if "name" not in person or "interests" not in person:
                raise AlgorithmError("Please provide the name and interests for all people.")

            if not isinstance(person["interests"], list):
                raise AlgorithmError("Please provide a list of interests for each person.")

            # Check validity for the longitude and latitude if the coordinates field exists
