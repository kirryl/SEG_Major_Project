import copy
import random, string
from nltkstem import SnowballStemmer

# Example input:
#{
#    "optimal": {
#        "reese": ["morgan", "groves", "carter", "shaw"],
#        "finch": ["morgan", "carter", "shaw", "groves"],
#        "fusco": ["shaw", "carter", "groves", "morgan"],
#        "elias": ["groves", "carter", "shaw", "morgan"]
#    },
#    "pessimal":{
#        "carter": ["reese", "fusco", "elias", "finch"],
#        "shaw": ["elias", "reese", "fusco", "finch"],
#        "groves": ["reese", "fusco", "elias", "finch"],
#        "morgan": ["finch", "fusco", "elias", "reese"]
#    }
#}

class AlgorithmError(Exception):
     def __init__(self, value):
         self.value = value
     def __str__(self):
         return repr(self.value)

def apply(input):
    if "optimal" in input and "pessimal" in input and len(input) == 2:
        for i in input["optimal"]:
            if len(input["optimal"][i]) != len(input["pessimal"]):
                raise AlgorithmError("Optimal and pessimal groups should have matching items")
        for i in input["pessimal"]:
            if len(input["pessimal"][i]) != len(input["optimal"]):
                raise AlgorithmError("Optimal and pessimal groups should have matching items")
        
        return matching(input)
    else:
        raise AlgorithmError("Please provide a proper input.")

def matching(input):
    matches = {}
    queue = []
    rVal = {"matches": {}}
    for i in input["pessimal"]:
        matches[i] = None
    for i in input["optimal"]:
        queue.append(i)
    while not len(queue) == 0:
        i = queue[0]
        
        for j in input["optimal"][i]:
            if matches[j] == None:
                del queue[0]
                matches[j] = i
                break
            elif matches[j] != i:
                current_index = input["pessimal"][j].index(i)
                other_index = input["pessimal"][j].index(matches[j])
                
                if current_index < other_index:
                    del queue[0]
                    queue.insert(0, matches[j])
                    matches[j] = i
                    break
    
    # shift key and values in dict
    for i in matches:
        rVal["matches"][matches[i]] = i
    return rVal
        
def stableMarriageAchieved(matches):
    for i in matches:
        if matches[i] == None:
            return False
    return True
