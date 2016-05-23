#ifndef PLACEMENT_H
#define PLACEMENT_H
#include "module.h"
#include "net.h"
//#include <unordered_set>

class placement
{

private:

	module systemModule;    //just a place holder
	namedModuleCollection subModules;
	namedNetCollection internalNets;
	std::string systemIdentifier;

	std::vector<partition*> allPartitions;

	//Important Layout Parameters
	unsigned int maxPartitionSize;
	unsigned int maxPartitionConnections;
	unsigned int maxPathLength;

	void initializeStructures();

	void partitionFormation();
	module *selectSeed(hashlib::pool<module *> moduleSet) const;
//	int connectionsToExistingPartitions(module *m);
	partition *createPartition(hashlib::pool<module *> &moduleSet, module *seed);

	void boxFormation();
	moduleCollection selectRoots(partition *p);
	box * selectPath( box *rootBox, box *remainingModules);


	void modulePlacement() {};
	void boxPlacement() {};
	void partitionPlacement() {};
	void terminalPlacement() {};



public:

	placement() : systemModule("topModule") { }

	~placement();

	void doPlacement();
	void addModule();
	void parseJson(std::string jsonFile);

	const std::string &Identifier() const {
		return systemIdentifier;
	}

	terminal & addSystemTerminal(const std::string &terminalIdentifier, const schematic::terminalType type);

};

#endif // PLACEMENT_H
