import visible from '../src/visible';

let elem;

function makeElem(x, y) {
  elem = document.createElement('div');
  elem.style.position = 'absolute';
  elem.style.width = '300px';
  elem.style.height = '300px';
  elem.style.top = y + 'px';
  elem.style.left = x + 'px';

  document.body.appendChild(elem);
}

function makePartialElem() {
  makeElem(-100, 200);
}

function makeFullElem() {
  makeElem(0, 0);
}

function makeInvisibleElem() {
  makeElem(600, 600);
}

describe('visible.js', () => {
  beforeEach(() => {
    if (elem) {
      elem.parentNode.removeChild(elem);
      elem = null;
    }
  });

  it('should exist', () => {
    expect(typeof visible).toBe('function');
  });

  describe('when the element does not exist', () => {
    it('should return undefined', () => {
      expect(visible(undefined)).toBe(undefined);
    });
  });

  describe('when we check for partial visibility', () => {
    describe('and the element is partially visible', () => {
      beforeEach(makePartialElem);

      it('should return true', () => {
        expect(visible(elem, true)).toBe(true);
      });
    });

    describe('and the element is fully visible', () => {
      beforeEach(makeFullElem);

      it('should return true', () => {
        expect(visible(elem, true)).toBe(true);
      });
    });

    describe('and the element is not visible', () => {
      beforeEach(makeInvisibleElem);

      it('should return false', () => {
        expect(visible(elem, true)).toBe(false);
      });
    });
  });

  describe('when we check for full visibility', () => {
    describe('and the element is partially visible', () => {
      beforeEach(makePartialElem);

      it('should return false', () => {
        expect(visible(elem, false)).toBe(false);
      });
    });

    describe('and the element is fully visible', () => {
      beforeEach(makeFullElem);

      it('should return true', () => {
        expect(visible(elem, false)).toBe(true);
      });
    });

    describe('and the element is not visible', () => {
      beforeEach(makeInvisibleElem);

      it('should return false', () => {
        expect(visible(elem, false)).toBe(false);
      });
    });
  });
});
