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
