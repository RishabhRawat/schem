#ifndef MODULES_H
#define MODULES_H
#include <string>
#include <vector>
#include <common.h>
#include <terminal.h> //for terminal vector

class modules
{
private:
    std::string moduleType;
    const std::string moduleIdentifier;
    intPair modulePosition;

    /* First along x-axis then along y-axis*/
    intPair moduleSize = {50,100}; //Default size

    //TODO: Currently using vectors for terminals
    //need to be sure if this is appropriate,
    //it seems better than unordered set as the terminals are limited
    std::vector<terminal> moduleTerminals;

public:
    modules();
    std::string getIdentifier() const {
        return moduleIdentifier;
    }
    intPair getModuleSize() { return moduleSize;}
};

namespace std
{
    template <>
    struct hash<modules>
    {
        size_t operator()(const modules& k) const
        {
            return (hash<string>()(k.getIdentifier()));
        }
    };
}

#endif // MODULES_H
