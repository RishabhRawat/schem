#ifndef TERMINAL_H
#define TERMINAL_H

#include "common.h"

struct bitTerminal {
	terminal* const baseTerminal;
	const int index;
	std::vector<bitNet*> connectedBitNets;
	bitTerminal(terminal* const baseTerminal, const int index) : baseTerminal(baseTerminal), index(index) {}
	bitTerminal(const bitTerminal&) = delete;
	bitTerminal& operator=(const bitTerminal&) = delete;
};

class terminal {
	friend class splicedTerminal;
	friend class coreDesign;
	friend class placement;
	friend class routing;

public:
	const std::string terminalIdentifier;
	const terminalType type;
	const int terminalWidth;
	module* const parentModule;

	terminal partialTerminal(int index1, int index2);
	terminal operator[](int index);

	terminal(const std::string& terminalIdentifier, const terminalType type, const int terminalWidth,
			module* const parentModule, const bool systemTerminal);

	~terminal();

	void connect(std::initializer_list<std::reference_wrapper<net>> netV);
	void connect(const net& n);

	/* sets position relative to the module which owns the terminal,
	 * relative to bottom left corner, must be set after the module size is set
	 * has no meaning for systemTerminals
	 */
	//	void setRelativePosition(int x, int y);

private:
	terminal(const terminal& baseTerminal, const int highIndex, const int lowIndex, const bool highToLow);

	bitTerminal** internalBitTerminals;

	const bool systemTerminal;
	const int highIndex;
	const int lowIndex;
	const bool highToLow;

	std::vector<splicedTerminal*> splices;

	mutable terminalSide side;
	intPair terminalPositionHint;

#ifdef WEB_COMPILATION
public:
// A get around for emscripten
#endif

	terminal(const terminal&) = default;
	terminal& operator=(const terminal&) = default;
};

class splicedTerminal {
	friend class coreDesign;
	friend class placement;
	friend class routing;
	friend class module;

private:
	const terminal* const baseTerminal;
	const std::string terminalIdentifier;

	intPair originalPosition;
	intPair placedPosition;
	net* const attachedNet;

	coalescedNet* getCoalescedNet();

public:
	module* getParent() const {
		return baseTerminal->parentModule;
	}
	terminalType getType() const {
		return baseTerminal->type;
	}
	bool isSystemTerminal() const {
		return baseTerminal->systemTerminal;
	}

	splicedTerminal(const terminal* const baseTerminal, const std::string& terminalName, net* attachedNet)
		: baseTerminal(baseTerminal), terminalIdentifier(terminalName), attachedNet(attachedNet) {}
};

#endif  // TERMINAL_H
