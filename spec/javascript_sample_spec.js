( () => {
  const runtime = require('cldr-plurals-runtime-js');

  describe('javascript rules', () => {
    describe('locales: am/as/bn/doi/fa/gu/hi/kn/pcm/zu, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 0 || n == 1); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.01', () => {
          expect(rule(...runtime.buildArgsFor('0.01'))).toEqual(true);
        });
        it('0.02', () => {
          expect(rule(...runtime.buildArgsFor('0.02'))).toEqual(true);
        });
        it('0.03', () => {
          expect(rule(...runtime.buildArgsFor('0.03'))).toEqual(true);
        });
        it('0.04', () => {
          expect(rule(...runtime.buildArgsFor('0.04'))).toEqual(true);
        });
      });
    });

    describe('locales: ff/hy/kab, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((i == 0) || (i == 1)); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
      });
    });

    describe('locales: pt, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(i) === i) && (i >= 0) && (i <= 1)); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
      });
    });

    describe('locales: ast/ca/de/en/et/fi/fy/gl/ia/io/it/ji/lij/nl/pt_PT/sc/scn/sv/sw/ur/yi, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 1 && v == 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });
    });

    describe('locales: si, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((n == 0) || (n == 1)) || (i == 0 && f == 1)); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('0.01', () => {
          expect(rule(...runtime.buildArgsFor('0.01'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('0.001', () => {
          expect(rule(...runtime.buildArgsFor('0.001'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
        it('0.0001', () => {
          expect(rule(...runtime.buildArgsFor('0.0001'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ak/bho/guw/ln/mg/nso/pa/ti/wa, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n) === n) && (n >= 0) && (n <= 1)); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: tzm, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((Math.floor(n) === n) && (n >= 0) && (n <= 1)) || ((Math.floor(n) === n) && (n >= 11) && (n <= 99))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('20', () => {
          expect(rule(...runtime.buildArgsFor('20'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('11.0', () => {
          expect(rule(...runtime.buildArgsFor('11.0'))).toEqual(true);
        });
        it('12.0', () => {
          expect(rule(...runtime.buildArgsFor('12.0'))).toEqual(true);
        });
        it('13.0', () => {
          expect(rule(...runtime.buildArgsFor('13.0'))).toEqual(true);
        });
        it('14.0', () => {
          expect(rule(...runtime.buildArgsFor('14.0'))).toEqual(true);
        });
        it('15.0', () => {
          expect(rule(...runtime.buildArgsFor('15.0'))).toEqual(true);
        });
        it('16.0', () => {
          expect(rule(...runtime.buildArgsFor('16.0'))).toEqual(true);
        });
        it('17.0', () => {
          expect(rule(...runtime.buildArgsFor('17.0'))).toEqual(true);
        });
        it('18.0', () => {
          expect(rule(...runtime.buildArgsFor('18.0'))).toEqual(true);
        });
        it('19.0', () => {
          expect(rule(...runtime.buildArgsFor('19.0'))).toEqual(true);
        });
        it('20.0', () => {
          expect(rule(...runtime.buildArgsFor('20.0'))).toEqual(true);
        });
        it('21.0', () => {
          expect(rule(...runtime.buildArgsFor('21.0'))).toEqual(true);
        });
        it('22.0', () => {
          expect(rule(...runtime.buildArgsFor('22.0'))).toEqual(true);
        });
        it('23.0', () => {
          expect(rule(...runtime.buildArgsFor('23.0'))).toEqual(true);
        });
        it('24.0', () => {
          expect(rule(...runtime.buildArgsFor('24.0'))).toEqual(true);
        });
      });
    });

    describe('locales: af/an/asa/az/bem/bez/bg/brx/ce/cgg/chr/ckb/dv/ee/el/eo/es/eu/fo/fur/gsw/ha/haw/hu/jgo/jmc/ka/kaj/kcg/kk/kkj/kl/ks/ksb/ku/ky/lb/lg/mas/mgo/ml/mn/mr/nah/nb/nd/ne/nn/nnh/no/nr/ny/nyn/om/or/os/pap/ps/rm/rof/rwk/saq/sd/sdh/seh/sn/so/sq/ss/ssy/st/syr/ta/te/teo/tig/tk/tn/tr/ts/ug/uz/ve/vo/vun/wae/xh/xog, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: da, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n == 1 || (t != 0 && ((i == 0) || (i == 1)))); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('1.6', () => {
          expect(rule(...runtime.buildArgsFor('1.6'))).toEqual(true);
        });
      });
    });

    describe('locales: is, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((t == 0 && i % 10 == 1) && i % 100 != 11) || t != 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('1.6', () => {
          expect(rule(...runtime.buildArgsFor('1.6'))).toEqual(true);
        });
        it('10.1', () => {
          expect(rule(...runtime.buildArgsFor('10.1'))).toEqual(true);
        });
        it('100.1', () => {
          expect(rule(...runtime.buildArgsFor('100.1'))).toEqual(true);
        });
        it('1000.1', () => {
          expect(rule(...runtime.buildArgsFor('1000.1'))).toEqual(true);
        });
      });
    });

    describe('locales: mk, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((v == 0 && i % 10 == 1) && i % 100 != 11) || (f % 10 == 1 && f % 100 != 11)); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('2.1', () => {
          expect(rule(...runtime.buildArgsFor('2.1'))).toEqual(true);
        });
        it('3.1', () => {
          expect(rule(...runtime.buildArgsFor('3.1'))).toEqual(true);
        });
        it('4.1', () => {
          expect(rule(...runtime.buildArgsFor('4.1'))).toEqual(true);
        });
        it('5.1', () => {
          expect(rule(...runtime.buildArgsFor('5.1'))).toEqual(true);
        });
        it('6.1', () => {
          expect(rule(...runtime.buildArgsFor('6.1'))).toEqual(true);
        });
        it('7.1', () => {
          expect(rule(...runtime.buildArgsFor('7.1'))).toEqual(true);
        });
        it('10.1', () => {
          expect(rule(...runtime.buildArgsFor('10.1'))).toEqual(true);
        });
        it('100.1', () => {
          expect(rule(...runtime.buildArgsFor('100.1'))).toEqual(true);
        });
        it('1000.1', () => {
          expect(rule(...runtime.buildArgsFor('1000.1'))).toEqual(true);
        });
      });
    });

    describe('locales: ceb/fil/tl, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((v == 0 && ((i == 1) || (i == 2) || (i == 3))) || (v == 0 && ((i % 10 != 4) && (i % 10 != 6) && (i % 10 != 9)))) || (v != 0 && ((f % 10 != 4) && (f % 10 != 6) && (f % 10 != 9)))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('20', () => {
          expect(rule(...runtime.buildArgsFor('20'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('1.7', () => {
          expect(rule(...runtime.buildArgsFor('1.7'))).toEqual(true);
        });
        it('1.8', () => {
          expect(rule(...runtime.buildArgsFor('1.8'))).toEqual(true);
        });
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('2.1', () => {
          expect(rule(...runtime.buildArgsFor('2.1'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: lv/prg, rule: zero;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((n % 10 == 0 || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19))) || (v == 2 && ((Math.floor(f % 100) === f % 100) && (f % 100 >= 11) && (f % 100 <= 19)))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('20', () => {
          expect(rule(...runtime.buildArgsFor('20'))).toEqual(true);
        });
        it('30', () => {
          expect(rule(...runtime.buildArgsFor('30'))).toEqual(true);
        });
        it('40', () => {
          expect(rule(...runtime.buildArgsFor('40'))).toEqual(true);
        });
        it('50', () => {
          expect(rule(...runtime.buildArgsFor('50'))).toEqual(true);
        });
        it('60', () => {
          expect(rule(...runtime.buildArgsFor('60'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('11.0', () => {
          expect(rule(...runtime.buildArgsFor('11.0'))).toEqual(true);
        });
        it('12.0', () => {
          expect(rule(...runtime.buildArgsFor('12.0'))).toEqual(true);
        });
        it('13.0', () => {
          expect(rule(...runtime.buildArgsFor('13.0'))).toEqual(true);
        });
        it('14.0', () => {
          expect(rule(...runtime.buildArgsFor('14.0'))).toEqual(true);
        });
        it('15.0', () => {
          expect(rule(...runtime.buildArgsFor('15.0'))).toEqual(true);
        });
        it('16.0', () => {
          expect(rule(...runtime.buildArgsFor('16.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: lv/prg, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((n % 10 == 1 && n % 100 != 11) || ((v == 2 && f % 10 == 1) && f % 100 != 11)) || (v != 2 && f % 10 == 1)); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('2.1', () => {
          expect(rule(...runtime.buildArgsFor('2.1'))).toEqual(true);
        });
        it('3.1', () => {
          expect(rule(...runtime.buildArgsFor('3.1'))).toEqual(true);
        });
        it('4.1', () => {
          expect(rule(...runtime.buildArgsFor('4.1'))).toEqual(true);
        });
        it('5.1', () => {
          expect(rule(...runtime.buildArgsFor('5.1'))).toEqual(true);
        });
        it('6.1', () => {
          expect(rule(...runtime.buildArgsFor('6.1'))).toEqual(true);
        });
        it('7.1', () => {
          expect(rule(...runtime.buildArgsFor('7.1'))).toEqual(true);
        });
        it('10.1', () => {
          expect(rule(...runtime.buildArgsFor('10.1'))).toEqual(true);
        });
        it('100.1', () => {
          expect(rule(...runtime.buildArgsFor('100.1'))).toEqual(true);
        });
        it('1000.1', () => {
          expect(rule(...runtime.buildArgsFor('1000.1'))).toEqual(true);
        });
      });
    });

    describe('locales: lag, rule: zero;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 0; });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: lag, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((i == 0) || (i == 1)) && n != 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('1.6', () => {
          expect(rule(...runtime.buildArgsFor('1.6'))).toEqual(true);
        });
      });
    });

    describe('locales: ksh, rule: zero;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 0; });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ksh, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: iu/naq/sat/se/sma/smi/smj/smn/sms, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: iu/naq/sat/se/sma/smi/smj/smn/sms, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 2; });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('2.00', () => {
          expect(rule(...runtime.buildArgsFor('2.00'))).toEqual(true);
        });
        it('2.000', () => {
          expect(rule(...runtime.buildArgsFor('2.000'))).toEqual(true);
        });
        it('2.0000', () => {
          expect(rule(...runtime.buildArgsFor('2.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: shi, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 0 || n == 1); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.01', () => {
          expect(rule(...runtime.buildArgsFor('0.01'))).toEqual(true);
        });
        it('0.02', () => {
          expect(rule(...runtime.buildArgsFor('0.02'))).toEqual(true);
        });
        it('0.03', () => {
          expect(rule(...runtime.buildArgsFor('0.03'))).toEqual(true);
        });
        it('0.04', () => {
          expect(rule(...runtime.buildArgsFor('0.04'))).toEqual(true);
        });
      });
    });

    describe('locales: shi, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n) === n) && (n >= 2) && (n <= 10)); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('2.00', () => {
          expect(rule(...runtime.buildArgsFor('2.00'))).toEqual(true);
        });
        it('3.00', () => {
          expect(rule(...runtime.buildArgsFor('3.00'))).toEqual(true);
        });
        it('4.00', () => {
          expect(rule(...runtime.buildArgsFor('4.00'))).toEqual(true);
        });
        it('5.00', () => {
          expect(rule(...runtime.buildArgsFor('5.00'))).toEqual(true);
        });
        it('6.00', () => {
          expect(rule(...runtime.buildArgsFor('6.00'))).toEqual(true);
        });
        it('7.00', () => {
          expect(rule(...runtime.buildArgsFor('7.00'))).toEqual(true);
        });
        it('8.00', () => {
          expect(rule(...runtime.buildArgsFor('8.00'))).toEqual(true);
        });
      });
    });

    describe('locales: mo/ro, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 1 && v == 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });
    });

    describe('locales: mo/ro, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v != 0 || n == 0) || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 2) && (n % 100 <= 19))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: bs/hr/sh/sr, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((v == 0 && i % 10 == 1) && i % 100 != 11) || (f % 10 == 1 && f % 100 != 11)); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('2.1', () => {
          expect(rule(...runtime.buildArgsFor('2.1'))).toEqual(true);
        });
        it('3.1', () => {
          expect(rule(...runtime.buildArgsFor('3.1'))).toEqual(true);
        });
        it('4.1', () => {
          expect(rule(...runtime.buildArgsFor('4.1'))).toEqual(true);
        });
        it('5.1', () => {
          expect(rule(...runtime.buildArgsFor('5.1'))).toEqual(true);
        });
        it('6.1', () => {
          expect(rule(...runtime.buildArgsFor('6.1'))).toEqual(true);
        });
        it('7.1', () => {
          expect(rule(...runtime.buildArgsFor('7.1'))).toEqual(true);
        });
        it('10.1', () => {
          expect(rule(...runtime.buildArgsFor('10.1'))).toEqual(true);
        });
        it('100.1', () => {
          expect(rule(...runtime.buildArgsFor('100.1'))).toEqual(true);
        });
        it('1000.1', () => {
          expect(rule(...runtime.buildArgsFor('1000.1'))).toEqual(true);
        });
      });
    });

    describe('locales: bs/hr/sh/sr, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 2) && (i % 10 <= 4))) && !((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14))) || (((Math.floor(f % 10) === f % 10) && (f % 10 >= 2) && (f % 10 <= 4)) && !((Math.floor(f % 100) === f % 100) && (f % 100 >= 12) && (f % 100 <= 14)))); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('32', () => {
          expect(rule(...runtime.buildArgsFor('32'))).toEqual(true);
        });
        it('33', () => {
          expect(rule(...runtime.buildArgsFor('33'))).toEqual(true);
        });
        it('34', () => {
          expect(rule(...runtime.buildArgsFor('34'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('43', () => {
          expect(rule(...runtime.buildArgsFor('43'))).toEqual(true);
        });
        it('44', () => {
          expect(rule(...runtime.buildArgsFor('44'))).toEqual(true);
        });
        it('52', () => {
          expect(rule(...runtime.buildArgsFor('52'))).toEqual(true);
        });
        it('53', () => {
          expect(rule(...runtime.buildArgsFor('53'))).toEqual(true);
        });
        it('54', () => {
          expect(rule(...runtime.buildArgsFor('54'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('2.2', () => {
          expect(rule(...runtime.buildArgsFor('2.2'))).toEqual(true);
        });
        it('2.3', () => {
          expect(rule(...runtime.buildArgsFor('2.3'))).toEqual(true);
        });
        it('2.4', () => {
          expect(rule(...runtime.buildArgsFor('2.4'))).toEqual(true);
        });
        it('3.2', () => {
          expect(rule(...runtime.buildArgsFor('3.2'))).toEqual(true);
        });
        it('3.3', () => {
          expect(rule(...runtime.buildArgsFor('3.3'))).toEqual(true);
        });
        it('3.4', () => {
          expect(rule(...runtime.buildArgsFor('3.4'))).toEqual(true);
        });
        it('4.2', () => {
          expect(rule(...runtime.buildArgsFor('4.2'))).toEqual(true);
        });
        it('4.3', () => {
          expect(rule(...runtime.buildArgsFor('4.3'))).toEqual(true);
        });
        it('4.4', () => {
          expect(rule(...runtime.buildArgsFor('4.4'))).toEqual(true);
        });
        it('5.2', () => {
          expect(rule(...runtime.buildArgsFor('5.2'))).toEqual(true);
        });
        it('10.2', () => {
          expect(rule(...runtime.buildArgsFor('10.2'))).toEqual(true);
        });
        it('100.2', () => {
          expect(rule(...runtime.buildArgsFor('100.2'))).toEqual(true);
        });
        it('1000.2', () => {
          expect(rule(...runtime.buildArgsFor('1000.2'))).toEqual(true);
        });
      });
    });

    describe('locales: fr, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((i == 0) || (i == 1)); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
      });
    });

    describe('locales: fr, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((((e == 0 && i != 0) && i % 1000000 == 0) && v == 0) || !((Math.floor(e) === e) && (e >= 0) && (e <= 5))); });

      describe('@integer', () => {
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
        it('1e6', () => {
          expect(rule(...runtime.buildArgsFor('1e6'))).toEqual(true);
        });
        it('2e6', () => {
          expect(rule(...runtime.buildArgsFor('2e6'))).toEqual(true);
        });
        it('3e6', () => {
          expect(rule(...runtime.buildArgsFor('3e6'))).toEqual(true);
        });
        it('4e6', () => {
          expect(rule(...runtime.buildArgsFor('4e6'))).toEqual(true);
        });
        it('5e6', () => {
          expect(rule(...runtime.buildArgsFor('5e6'))).toEqual(true);
        });
        it('6e6', () => {
          expect(rule(...runtime.buildArgsFor('6e6'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0000001e6', () => {
          expect(rule(...runtime.buildArgsFor('1.0000001e6'))).toEqual(true);
        });
        it('1.1e6', () => {
          expect(rule(...runtime.buildArgsFor('1.1e6'))).toEqual(true);
        });
        it('2.0000001e6', () => {
          expect(rule(...runtime.buildArgsFor('2.0000001e6'))).toEqual(true);
        });
        it('2.1e6', () => {
          expect(rule(...runtime.buildArgsFor('2.1e6'))).toEqual(true);
        });
        it('3.0000001e6', () => {
          expect(rule(...runtime.buildArgsFor('3.0000001e6'))).toEqual(true);
        });
        it('3.1e6', () => {
          expect(rule(...runtime.buildArgsFor('3.1e6'))).toEqual(true);
        });
      });
    });

    describe('locales: gd, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((n == 1) || (n == 11)); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('11.0', () => {
          expect(rule(...runtime.buildArgsFor('11.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('11.00', () => {
          expect(rule(...runtime.buildArgsFor('11.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('11.000', () => {
          expect(rule(...runtime.buildArgsFor('11.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: gd, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((n == 2) || (n == 12)); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('12.0', () => {
          expect(rule(...runtime.buildArgsFor('12.0'))).toEqual(true);
        });
        it('2.00', () => {
          expect(rule(...runtime.buildArgsFor('2.00'))).toEqual(true);
        });
        it('12.00', () => {
          expect(rule(...runtime.buildArgsFor('12.00'))).toEqual(true);
        });
        it('2.000', () => {
          expect(rule(...runtime.buildArgsFor('2.000'))).toEqual(true);
        });
        it('12.000', () => {
          expect(rule(...runtime.buildArgsFor('12.000'))).toEqual(true);
        });
        it('2.0000', () => {
          expect(rule(...runtime.buildArgsFor('2.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: gd, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((Math.floor(n) === n) && (n >= 3) && (n <= 10)) || ((Math.floor(n) === n) && (n >= 13) && (n <= 19))); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('13.0', () => {
          expect(rule(...runtime.buildArgsFor('13.0'))).toEqual(true);
        });
        it('14.0', () => {
          expect(rule(...runtime.buildArgsFor('14.0'))).toEqual(true);
        });
        it('15.0', () => {
          expect(rule(...runtime.buildArgsFor('15.0'))).toEqual(true);
        });
        it('16.0', () => {
          expect(rule(...runtime.buildArgsFor('16.0'))).toEqual(true);
        });
        it('17.0', () => {
          expect(rule(...runtime.buildArgsFor('17.0'))).toEqual(true);
        });
        it('18.0', () => {
          expect(rule(...runtime.buildArgsFor('18.0'))).toEqual(true);
        });
        it('19.0', () => {
          expect(rule(...runtime.buildArgsFor('19.0'))).toEqual(true);
        });
        it('3.00', () => {
          expect(rule(...runtime.buildArgsFor('3.00'))).toEqual(true);
        });
      });
    });

    describe('locales: sl, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (v == 0 && i % 100 == 1); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('201', () => {
          expect(rule(...runtime.buildArgsFor('201'))).toEqual(true);
        });
        it('301', () => {
          expect(rule(...runtime.buildArgsFor('301'))).toEqual(true);
        });
        it('401', () => {
          expect(rule(...runtime.buildArgsFor('401'))).toEqual(true);
        });
        it('501', () => {
          expect(rule(...runtime.buildArgsFor('501'))).toEqual(true);
        });
        it('601', () => {
          expect(rule(...runtime.buildArgsFor('601'))).toEqual(true);
        });
        it('701', () => {
          expect(rule(...runtime.buildArgsFor('701'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });
    });

    describe('locales: sl, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (v == 0 && i % 100 == 2); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('202', () => {
          expect(rule(...runtime.buildArgsFor('202'))).toEqual(true);
        });
        it('302', () => {
          expect(rule(...runtime.buildArgsFor('302'))).toEqual(true);
        });
        it('402', () => {
          expect(rule(...runtime.buildArgsFor('402'))).toEqual(true);
        });
        it('502', () => {
          expect(rule(...runtime.buildArgsFor('502'))).toEqual(true);
        });
        it('602', () => {
          expect(rule(...runtime.buildArgsFor('602'))).toEqual(true);
        });
        it('702', () => {
          expect(rule(...runtime.buildArgsFor('702'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });
    });

    describe('locales: sl, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 3) && (i % 100 <= 4))) || v != 0); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('103', () => {
          expect(rule(...runtime.buildArgsFor('103'))).toEqual(true);
        });
        it('104', () => {
          expect(rule(...runtime.buildArgsFor('104'))).toEqual(true);
        });
        it('203', () => {
          expect(rule(...runtime.buildArgsFor('203'))).toEqual(true);
        });
        it('204', () => {
          expect(rule(...runtime.buildArgsFor('204'))).toEqual(true);
        });
        it('303', () => {
          expect(rule(...runtime.buildArgsFor('303'))).toEqual(true);
        });
        it('304', () => {
          expect(rule(...runtime.buildArgsFor('304'))).toEqual(true);
        });
        it('403', () => {
          expect(rule(...runtime.buildArgsFor('403'))).toEqual(true);
        });
        it('404', () => {
          expect(rule(...runtime.buildArgsFor('404'))).toEqual(true);
        });
        it('503', () => {
          expect(rule(...runtime.buildArgsFor('503'))).toEqual(true);
        });
        it('504', () => {
          expect(rule(...runtime.buildArgsFor('504'))).toEqual(true);
        });
        it('603', () => {
          expect(rule(...runtime.buildArgsFor('603'))).toEqual(true);
        });
        it('604', () => {
          expect(rule(...runtime.buildArgsFor('604'))).toEqual(true);
        });
        it('703', () => {
          expect(rule(...runtime.buildArgsFor('703'))).toEqual(true);
        });
        it('704', () => {
          expect(rule(...runtime.buildArgsFor('704'))).toEqual(true);
        });
        it('1003', () => {
          expect(rule(...runtime.buildArgsFor('1003'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: dsb/hsb, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && i % 100 == 1) || f % 100 == 1); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('201', () => {
          expect(rule(...runtime.buildArgsFor('201'))).toEqual(true);
        });
        it('301', () => {
          expect(rule(...runtime.buildArgsFor('301'))).toEqual(true);
        });
        it('401', () => {
          expect(rule(...runtime.buildArgsFor('401'))).toEqual(true);
        });
        it('501', () => {
          expect(rule(...runtime.buildArgsFor('501'))).toEqual(true);
        });
        it('601', () => {
          expect(rule(...runtime.buildArgsFor('601'))).toEqual(true);
        });
        it('701', () => {
          expect(rule(...runtime.buildArgsFor('701'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('2.1', () => {
          expect(rule(...runtime.buildArgsFor('2.1'))).toEqual(true);
        });
        it('3.1', () => {
          expect(rule(...runtime.buildArgsFor('3.1'))).toEqual(true);
        });
        it('4.1', () => {
          expect(rule(...runtime.buildArgsFor('4.1'))).toEqual(true);
        });
        it('5.1', () => {
          expect(rule(...runtime.buildArgsFor('5.1'))).toEqual(true);
        });
        it('6.1', () => {
          expect(rule(...runtime.buildArgsFor('6.1'))).toEqual(true);
        });
        it('7.1', () => {
          expect(rule(...runtime.buildArgsFor('7.1'))).toEqual(true);
        });
        it('10.1', () => {
          expect(rule(...runtime.buildArgsFor('10.1'))).toEqual(true);
        });
        it('100.1', () => {
          expect(rule(...runtime.buildArgsFor('100.1'))).toEqual(true);
        });
        it('1000.1', () => {
          expect(rule(...runtime.buildArgsFor('1000.1'))).toEqual(true);
        });
      });
    });

    describe('locales: dsb/hsb, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && i % 100 == 2) || f % 100 == 2); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('202', () => {
          expect(rule(...runtime.buildArgsFor('202'))).toEqual(true);
        });
        it('302', () => {
          expect(rule(...runtime.buildArgsFor('302'))).toEqual(true);
        });
        it('402', () => {
          expect(rule(...runtime.buildArgsFor('402'))).toEqual(true);
        });
        it('502', () => {
          expect(rule(...runtime.buildArgsFor('502'))).toEqual(true);
        });
        it('602', () => {
          expect(rule(...runtime.buildArgsFor('602'))).toEqual(true);
        });
        it('702', () => {
          expect(rule(...runtime.buildArgsFor('702'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('2.2', () => {
          expect(rule(...runtime.buildArgsFor('2.2'))).toEqual(true);
        });
        it('3.2', () => {
          expect(rule(...runtime.buildArgsFor('3.2'))).toEqual(true);
        });
        it('4.2', () => {
          expect(rule(...runtime.buildArgsFor('4.2'))).toEqual(true);
        });
        it('5.2', () => {
          expect(rule(...runtime.buildArgsFor('5.2'))).toEqual(true);
        });
        it('6.2', () => {
          expect(rule(...runtime.buildArgsFor('6.2'))).toEqual(true);
        });
        it('7.2', () => {
          expect(rule(...runtime.buildArgsFor('7.2'))).toEqual(true);
        });
        it('10.2', () => {
          expect(rule(...runtime.buildArgsFor('10.2'))).toEqual(true);
        });
        it('100.2', () => {
          expect(rule(...runtime.buildArgsFor('100.2'))).toEqual(true);
        });
        it('1000.2', () => {
          expect(rule(...runtime.buildArgsFor('1000.2'))).toEqual(true);
        });
      });
    });

    describe('locales: dsb/hsb, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 3) && (i % 100 <= 4))) || ((Math.floor(f % 100) === f % 100) && (f % 100 >= 3) && (f % 100 <= 4))); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('103', () => {
          expect(rule(...runtime.buildArgsFor('103'))).toEqual(true);
        });
        it('104', () => {
          expect(rule(...runtime.buildArgsFor('104'))).toEqual(true);
        });
        it('203', () => {
          expect(rule(...runtime.buildArgsFor('203'))).toEqual(true);
        });
        it('204', () => {
          expect(rule(...runtime.buildArgsFor('204'))).toEqual(true);
        });
        it('303', () => {
          expect(rule(...runtime.buildArgsFor('303'))).toEqual(true);
        });
        it('304', () => {
          expect(rule(...runtime.buildArgsFor('304'))).toEqual(true);
        });
        it('403', () => {
          expect(rule(...runtime.buildArgsFor('403'))).toEqual(true);
        });
        it('404', () => {
          expect(rule(...runtime.buildArgsFor('404'))).toEqual(true);
        });
        it('503', () => {
          expect(rule(...runtime.buildArgsFor('503'))).toEqual(true);
        });
        it('504', () => {
          expect(rule(...runtime.buildArgsFor('504'))).toEqual(true);
        });
        it('603', () => {
          expect(rule(...runtime.buildArgsFor('603'))).toEqual(true);
        });
        it('604', () => {
          expect(rule(...runtime.buildArgsFor('604'))).toEqual(true);
        });
        it('703', () => {
          expect(rule(...runtime.buildArgsFor('703'))).toEqual(true);
        });
        it('704', () => {
          expect(rule(...runtime.buildArgsFor('704'))).toEqual(true);
        });
        it('1003', () => {
          expect(rule(...runtime.buildArgsFor('1003'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('2.3', () => {
          expect(rule(...runtime.buildArgsFor('2.3'))).toEqual(true);
        });
        it('2.4', () => {
          expect(rule(...runtime.buildArgsFor('2.4'))).toEqual(true);
        });
        it('3.3', () => {
          expect(rule(...runtime.buildArgsFor('3.3'))).toEqual(true);
        });
        it('3.4', () => {
          expect(rule(...runtime.buildArgsFor('3.4'))).toEqual(true);
        });
        it('4.3', () => {
          expect(rule(...runtime.buildArgsFor('4.3'))).toEqual(true);
        });
        it('4.4', () => {
          expect(rule(...runtime.buildArgsFor('4.4'))).toEqual(true);
        });
        it('5.3', () => {
          expect(rule(...runtime.buildArgsFor('5.3'))).toEqual(true);
        });
        it('5.4', () => {
          expect(rule(...runtime.buildArgsFor('5.4'))).toEqual(true);
        });
        it('6.3', () => {
          expect(rule(...runtime.buildArgsFor('6.3'))).toEqual(true);
        });
        it('6.4', () => {
          expect(rule(...runtime.buildArgsFor('6.4'))).toEqual(true);
        });
        it('7.3', () => {
          expect(rule(...runtime.buildArgsFor('7.3'))).toEqual(true);
        });
        it('7.4', () => {
          expect(rule(...runtime.buildArgsFor('7.4'))).toEqual(true);
        });
        it('10.3', () => {
          expect(rule(...runtime.buildArgsFor('10.3'))).toEqual(true);
        });
        it('100.3', () => {
          expect(rule(...runtime.buildArgsFor('100.3'))).toEqual(true);
        });
        it('1000.3', () => {
          expect(rule(...runtime.buildArgsFor('1000.3'))).toEqual(true);
        });
      });
    });

    describe('locales: he/iw, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 1 && v == 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });
    });

    describe('locales: he/iw, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 2 && v == 0); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
      });
    });

    describe('locales: he/iw, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && !((Math.floor(n) === n) && (n >= 0) && (n <= 10))) && n % 10 == 0); });

      describe('@integer', () => {
        it('20', () => {
          expect(rule(...runtime.buildArgsFor('20'))).toEqual(true);
        });
        it('30', () => {
          expect(rule(...runtime.buildArgsFor('30'))).toEqual(true);
        });
        it('40', () => {
          expect(rule(...runtime.buildArgsFor('40'))).toEqual(true);
        });
        it('50', () => {
          expect(rule(...runtime.buildArgsFor('50'))).toEqual(true);
        });
        it('60', () => {
          expect(rule(...runtime.buildArgsFor('60'))).toEqual(true);
        });
        it('70', () => {
          expect(rule(...runtime.buildArgsFor('70'))).toEqual(true);
        });
        it('80', () => {
          expect(rule(...runtime.buildArgsFor('80'))).toEqual(true);
        });
        it('90', () => {
          expect(rule(...runtime.buildArgsFor('90'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });
    });

    describe('locales: cs/sk, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 1 && v == 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });
    });

    describe('locales: cs/sk, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((Math.floor(i) === i) && (i >= 2) && (i <= 4)) && v == 0); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
      });
    });

    describe('locales: cs/sk, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return v != 0; });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: pl, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (i == 1 && v == 0); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });
    });

    describe('locales: pl, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 2) && (i % 10 <= 4))) && !((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14))); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('32', () => {
          expect(rule(...runtime.buildArgsFor('32'))).toEqual(true);
        });
        it('33', () => {
          expect(rule(...runtime.buildArgsFor('33'))).toEqual(true);
        });
        it('34', () => {
          expect(rule(...runtime.buildArgsFor('34'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('43', () => {
          expect(rule(...runtime.buildArgsFor('43'))).toEqual(true);
        });
        it('44', () => {
          expect(rule(...runtime.buildArgsFor('44'))).toEqual(true);
        });
        it('52', () => {
          expect(rule(...runtime.buildArgsFor('52'))).toEqual(true);
        });
        it('53', () => {
          expect(rule(...runtime.buildArgsFor('53'))).toEqual(true);
        });
        it('54', () => {
          expect(rule(...runtime.buildArgsFor('54'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });
    });

    describe('locales: pl, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((((v == 0 && i != 1) && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 0) && (i % 10 <= 1))) || (v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 5) && (i % 10 <= 9)))) || (v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14)))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });
    });

    describe('locales: be, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n % 10 == 1 && n % 100 != 11); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('21.0', () => {
          expect(rule(...runtime.buildArgsFor('21.0'))).toEqual(true);
        });
        it('31.0', () => {
          expect(rule(...runtime.buildArgsFor('31.0'))).toEqual(true);
        });
        it('41.0', () => {
          expect(rule(...runtime.buildArgsFor('41.0'))).toEqual(true);
        });
        it('51.0', () => {
          expect(rule(...runtime.buildArgsFor('51.0'))).toEqual(true);
        });
        it('61.0', () => {
          expect(rule(...runtime.buildArgsFor('61.0'))).toEqual(true);
        });
        it('71.0', () => {
          expect(rule(...runtime.buildArgsFor('71.0'))).toEqual(true);
        });
        it('81.0', () => {
          expect(rule(...runtime.buildArgsFor('81.0'))).toEqual(true);
        });
        it('101.0', () => {
          expect(rule(...runtime.buildArgsFor('101.0'))).toEqual(true);
        });
        it('1001.0', () => {
          expect(rule(...runtime.buildArgsFor('1001.0'))).toEqual(true);
        });
      });
    });

    describe('locales: be, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((Math.floor(n % 10) === n % 10) && (n % 10 >= 2) && (n % 10 <= 4)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 12) && (n % 100 <= 14))); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('32', () => {
          expect(rule(...runtime.buildArgsFor('32'))).toEqual(true);
        });
        it('33', () => {
          expect(rule(...runtime.buildArgsFor('33'))).toEqual(true);
        });
        it('34', () => {
          expect(rule(...runtime.buildArgsFor('34'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('43', () => {
          expect(rule(...runtime.buildArgsFor('43'))).toEqual(true);
        });
        it('44', () => {
          expect(rule(...runtime.buildArgsFor('44'))).toEqual(true);
        });
        it('52', () => {
          expect(rule(...runtime.buildArgsFor('52'))).toEqual(true);
        });
        it('53', () => {
          expect(rule(...runtime.buildArgsFor('53'))).toEqual(true);
        });
        it('54', () => {
          expect(rule(...runtime.buildArgsFor('54'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('22.0', () => {
          expect(rule(...runtime.buildArgsFor('22.0'))).toEqual(true);
        });
        it('23.0', () => {
          expect(rule(...runtime.buildArgsFor('23.0'))).toEqual(true);
        });
        it('24.0', () => {
          expect(rule(...runtime.buildArgsFor('24.0'))).toEqual(true);
        });
        it('32.0', () => {
          expect(rule(...runtime.buildArgsFor('32.0'))).toEqual(true);
        });
        it('33.0', () => {
          expect(rule(...runtime.buildArgsFor('33.0'))).toEqual(true);
        });
        it('102.0', () => {
          expect(rule(...runtime.buildArgsFor('102.0'))).toEqual(true);
        });
        it('1002.0', () => {
          expect(rule(...runtime.buildArgsFor('1002.0'))).toEqual(true);
        });
      });
    });

    describe('locales: be, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((n % 10 == 0 || ((Math.floor(n % 10) === n % 10) && (n % 10 >= 5) && (n % 10 <= 9))) || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 14))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('11.0', () => {
          expect(rule(...runtime.buildArgsFor('11.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: lt, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n % 10 == 1 && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19))); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('21.0', () => {
          expect(rule(...runtime.buildArgsFor('21.0'))).toEqual(true);
        });
        it('31.0', () => {
          expect(rule(...runtime.buildArgsFor('31.0'))).toEqual(true);
        });
        it('41.0', () => {
          expect(rule(...runtime.buildArgsFor('41.0'))).toEqual(true);
        });
        it('51.0', () => {
          expect(rule(...runtime.buildArgsFor('51.0'))).toEqual(true);
        });
        it('61.0', () => {
          expect(rule(...runtime.buildArgsFor('61.0'))).toEqual(true);
        });
        it('71.0', () => {
          expect(rule(...runtime.buildArgsFor('71.0'))).toEqual(true);
        });
        it('81.0', () => {
          expect(rule(...runtime.buildArgsFor('81.0'))).toEqual(true);
        });
        it('101.0', () => {
          expect(rule(...runtime.buildArgsFor('101.0'))).toEqual(true);
        });
        it('1001.0', () => {
          expect(rule(...runtime.buildArgsFor('1001.0'))).toEqual(true);
        });
      });
    });

    describe('locales: lt, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((Math.floor(n % 10) === n % 10) && (n % 10 >= 2) && (n % 10 <= 9)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19))); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('25', () => {
          expect(rule(...runtime.buildArgsFor('25'))).toEqual(true);
        });
        it('26', () => {
          expect(rule(...runtime.buildArgsFor('26'))).toEqual(true);
        });
        it('27', () => {
          expect(rule(...runtime.buildArgsFor('27'))).toEqual(true);
        });
        it('28', () => {
          expect(rule(...runtime.buildArgsFor('28'))).toEqual(true);
        });
        it('29', () => {
          expect(rule(...runtime.buildArgsFor('29'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('22.0', () => {
          expect(rule(...runtime.buildArgsFor('22.0'))).toEqual(true);
        });
        it('102.0', () => {
          expect(rule(...runtime.buildArgsFor('102.0'))).toEqual(true);
        });
        it('1002.0', () => {
          expect(rule(...runtime.buildArgsFor('1002.0'))).toEqual(true);
        });
      });
    });

    describe('locales: lt, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return f != 0; });

      describe('@decimal', () => {
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('1.6', () => {
          expect(rule(...runtime.buildArgsFor('1.6'))).toEqual(true);
        });
        it('1.7', () => {
          expect(rule(...runtime.buildArgsFor('1.7'))).toEqual(true);
        });
        it('10.1', () => {
          expect(rule(...runtime.buildArgsFor('10.1'))).toEqual(true);
        });
        it('100.1', () => {
          expect(rule(...runtime.buildArgsFor('100.1'))).toEqual(true);
        });
        it('1000.1', () => {
          expect(rule(...runtime.buildArgsFor('1000.1'))).toEqual(true);
        });
      });
    });

    describe('locales: mt, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: mt, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n == 0 || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 2) && (n % 100 <= 10))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('103', () => {
          expect(rule(...runtime.buildArgsFor('103'))).toEqual(true);
        });
        it('104', () => {
          expect(rule(...runtime.buildArgsFor('104'))).toEqual(true);
        });
        it('105', () => {
          expect(rule(...runtime.buildArgsFor('105'))).toEqual(true);
        });
        it('106', () => {
          expect(rule(...runtime.buildArgsFor('106'))).toEqual(true);
        });
        it('107', () => {
          expect(rule(...runtime.buildArgsFor('107'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('102.0', () => {
          expect(rule(...runtime.buildArgsFor('102.0'))).toEqual(true);
        });
        it('1002.0', () => {
          expect(rule(...runtime.buildArgsFor('1002.0'))).toEqual(true);
        });
      });
    });

    describe('locales: mt, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19)); });

      describe('@integer', () => {
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('111', () => {
          expect(rule(...runtime.buildArgsFor('111'))).toEqual(true);
        });
        it('112', () => {
          expect(rule(...runtime.buildArgsFor('112'))).toEqual(true);
        });
        it('113', () => {
          expect(rule(...runtime.buildArgsFor('113'))).toEqual(true);
        });
        it('114', () => {
          expect(rule(...runtime.buildArgsFor('114'))).toEqual(true);
        });
        it('115', () => {
          expect(rule(...runtime.buildArgsFor('115'))).toEqual(true);
        });
        it('116', () => {
          expect(rule(...runtime.buildArgsFor('116'))).toEqual(true);
        });
        it('117', () => {
          expect(rule(...runtime.buildArgsFor('117'))).toEqual(true);
        });
        it('1011', () => {
          expect(rule(...runtime.buildArgsFor('1011'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('11.0', () => {
          expect(rule(...runtime.buildArgsFor('11.0'))).toEqual(true);
        });
        it('12.0', () => {
          expect(rule(...runtime.buildArgsFor('12.0'))).toEqual(true);
        });
        it('13.0', () => {
          expect(rule(...runtime.buildArgsFor('13.0'))).toEqual(true);
        });
        it('14.0', () => {
          expect(rule(...runtime.buildArgsFor('14.0'))).toEqual(true);
        });
        it('15.0', () => {
          expect(rule(...runtime.buildArgsFor('15.0'))).toEqual(true);
        });
        it('16.0', () => {
          expect(rule(...runtime.buildArgsFor('16.0'))).toEqual(true);
        });
        it('17.0', () => {
          expect(rule(...runtime.buildArgsFor('17.0'))).toEqual(true);
        });
        it('18.0', () => {
          expect(rule(...runtime.buildArgsFor('18.0'))).toEqual(true);
        });
        it('111.0', () => {
          expect(rule(...runtime.buildArgsFor('111.0'))).toEqual(true);
        });
        it('1011.0', () => {
          expect(rule(...runtime.buildArgsFor('1011.0'))).toEqual(true);
        });
      });
    });

    describe('locales: ru/uk, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && i % 10 == 1) && i % 100 != 11); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });
    });

    describe('locales: ru/uk, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 2) && (i % 10 <= 4))) && !((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14))); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('32', () => {
          expect(rule(...runtime.buildArgsFor('32'))).toEqual(true);
        });
        it('33', () => {
          expect(rule(...runtime.buildArgsFor('33'))).toEqual(true);
        });
        it('34', () => {
          expect(rule(...runtime.buildArgsFor('34'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('43', () => {
          expect(rule(...runtime.buildArgsFor('43'))).toEqual(true);
        });
        it('44', () => {
          expect(rule(...runtime.buildArgsFor('44'))).toEqual(true);
        });
        it('52', () => {
          expect(rule(...runtime.buildArgsFor('52'))).toEqual(true);
        });
        it('53', () => {
          expect(rule(...runtime.buildArgsFor('53'))).toEqual(true);
        });
        it('54', () => {
          expect(rule(...runtime.buildArgsFor('54'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });
    });

    describe('locales: ru/uk, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (((v == 0 && i % 10 == 0) || (v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 5) && (i % 10 <= 9)))) || (v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 11) && (i % 100 <= 14)))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });
    });

    describe('locales: br, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n % 10 == 1 && ((n % 100 != 11) && (n % 100 != 71) && (n % 100 != 91))); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('21.0', () => {
          expect(rule(...runtime.buildArgsFor('21.0'))).toEqual(true);
        });
        it('31.0', () => {
          expect(rule(...runtime.buildArgsFor('31.0'))).toEqual(true);
        });
        it('41.0', () => {
          expect(rule(...runtime.buildArgsFor('41.0'))).toEqual(true);
        });
        it('51.0', () => {
          expect(rule(...runtime.buildArgsFor('51.0'))).toEqual(true);
        });
        it('61.0', () => {
          expect(rule(...runtime.buildArgsFor('61.0'))).toEqual(true);
        });
        it('81.0', () => {
          expect(rule(...runtime.buildArgsFor('81.0'))).toEqual(true);
        });
        it('101.0', () => {
          expect(rule(...runtime.buildArgsFor('101.0'))).toEqual(true);
        });
        it('1001.0', () => {
          expect(rule(...runtime.buildArgsFor('1001.0'))).toEqual(true);
        });
      });
    });

    describe('locales: br, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n % 10 == 2 && ((n % 100 != 12) && (n % 100 != 72) && (n % 100 != 92))); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('32', () => {
          expect(rule(...runtime.buildArgsFor('32'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('52', () => {
          expect(rule(...runtime.buildArgsFor('52'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('82', () => {
          expect(rule(...runtime.buildArgsFor('82'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('22.0', () => {
          expect(rule(...runtime.buildArgsFor('22.0'))).toEqual(true);
        });
        it('32.0', () => {
          expect(rule(...runtime.buildArgsFor('32.0'))).toEqual(true);
        });
        it('42.0', () => {
          expect(rule(...runtime.buildArgsFor('42.0'))).toEqual(true);
        });
        it('52.0', () => {
          expect(rule(...runtime.buildArgsFor('52.0'))).toEqual(true);
        });
        it('62.0', () => {
          expect(rule(...runtime.buildArgsFor('62.0'))).toEqual(true);
        });
        it('82.0', () => {
          expect(rule(...runtime.buildArgsFor('82.0'))).toEqual(true);
        });
        it('102.0', () => {
          expect(rule(...runtime.buildArgsFor('102.0'))).toEqual(true);
        });
        it('1002.0', () => {
          expect(rule(...runtime.buildArgsFor('1002.0'))).toEqual(true);
        });
      });
    });

    describe('locales: br, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((((Math.floor(n % 10) === n % 10) && (n % 10 >= 3) && (n % 10 <= 4)) || (n % 10 == 9)) && (!((Math.floor(n % 100) === n % 100) && (n % 100 >= 10) && (n % 100 <= 19)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 70) && (n % 100 <= 79)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 90) && (n % 100 <= 99)))); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('29', () => {
          expect(rule(...runtime.buildArgsFor('29'))).toEqual(true);
        });
        it('33', () => {
          expect(rule(...runtime.buildArgsFor('33'))).toEqual(true);
        });
        it('34', () => {
          expect(rule(...runtime.buildArgsFor('34'))).toEqual(true);
        });
        it('39', () => {
          expect(rule(...runtime.buildArgsFor('39'))).toEqual(true);
        });
        it('43', () => {
          expect(rule(...runtime.buildArgsFor('43'))).toEqual(true);
        });
        it('44', () => {
          expect(rule(...runtime.buildArgsFor('44'))).toEqual(true);
        });
        it('49', () => {
          expect(rule(...runtime.buildArgsFor('49'))).toEqual(true);
        });
        it('103', () => {
          expect(rule(...runtime.buildArgsFor('103'))).toEqual(true);
        });
        it('1003', () => {
          expect(rule(...runtime.buildArgsFor('1003'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('23.0', () => {
          expect(rule(...runtime.buildArgsFor('23.0'))).toEqual(true);
        });
        it('24.0', () => {
          expect(rule(...runtime.buildArgsFor('24.0'))).toEqual(true);
        });
        it('29.0', () => {
          expect(rule(...runtime.buildArgsFor('29.0'))).toEqual(true);
        });
        it('33.0', () => {
          expect(rule(...runtime.buildArgsFor('33.0'))).toEqual(true);
        });
        it('34.0', () => {
          expect(rule(...runtime.buildArgsFor('34.0'))).toEqual(true);
        });
        it('103.0', () => {
          expect(rule(...runtime.buildArgsFor('103.0'))).toEqual(true);
        });
        it('1003.0', () => {
          expect(rule(...runtime.buildArgsFor('1003.0'))).toEqual(true);
        });
      });
    });

    describe('locales: br, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n != 0 && n % 1000000 == 0); });

      describe('@integer', () => {
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
        it('1000000.00', () => {
          expect(rule(...runtime.buildArgsFor('1000000.00'))).toEqual(true);
        });
        it('1000000.000', () => {
          expect(rule(...runtime.buildArgsFor('1000000.000'))).toEqual(true);
        });
        it('1000000.0000', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ga, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ga, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 2; });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('2.00', () => {
          expect(rule(...runtime.buildArgsFor('2.00'))).toEqual(true);
        });
        it('2.000', () => {
          expect(rule(...runtime.buildArgsFor('2.000'))).toEqual(true);
        });
        it('2.0000', () => {
          expect(rule(...runtime.buildArgsFor('2.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ga, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n) === n) && (n >= 3) && (n <= 6)); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('3.00', () => {
          expect(rule(...runtime.buildArgsFor('3.00'))).toEqual(true);
        });
        it('4.00', () => {
          expect(rule(...runtime.buildArgsFor('4.00'))).toEqual(true);
        });
        it('5.00', () => {
          expect(rule(...runtime.buildArgsFor('5.00'))).toEqual(true);
        });
        it('6.00', () => {
          expect(rule(...runtime.buildArgsFor('6.00'))).toEqual(true);
        });
        it('3.000', () => {
          expect(rule(...runtime.buildArgsFor('3.000'))).toEqual(true);
        });
        it('4.000', () => {
          expect(rule(...runtime.buildArgsFor('4.000'))).toEqual(true);
        });
        it('5.000', () => {
          expect(rule(...runtime.buildArgsFor('5.000'))).toEqual(true);
        });
        it('6.000', () => {
          expect(rule(...runtime.buildArgsFor('6.000'))).toEqual(true);
        });
        it('3.0000', () => {
          expect(rule(...runtime.buildArgsFor('3.0000'))).toEqual(true);
        });
        it('4.0000', () => {
          expect(rule(...runtime.buildArgsFor('4.0000'))).toEqual(true);
        });
        it('5.0000', () => {
          expect(rule(...runtime.buildArgsFor('5.0000'))).toEqual(true);
        });
        it('6.0000', () => {
          expect(rule(...runtime.buildArgsFor('6.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ga, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n) === n) && (n >= 7) && (n <= 10)); });

      describe('@integer', () => {
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('7.00', () => {
          expect(rule(...runtime.buildArgsFor('7.00'))).toEqual(true);
        });
        it('8.00', () => {
          expect(rule(...runtime.buildArgsFor('8.00'))).toEqual(true);
        });
        it('9.00', () => {
          expect(rule(...runtime.buildArgsFor('9.00'))).toEqual(true);
        });
        it('10.00', () => {
          expect(rule(...runtime.buildArgsFor('10.00'))).toEqual(true);
        });
        it('7.000', () => {
          expect(rule(...runtime.buildArgsFor('7.000'))).toEqual(true);
        });
        it('8.000', () => {
          expect(rule(...runtime.buildArgsFor('8.000'))).toEqual(true);
        });
        it('9.000', () => {
          expect(rule(...runtime.buildArgsFor('9.000'))).toEqual(true);
        });
        it('10.000', () => {
          expect(rule(...runtime.buildArgsFor('10.000'))).toEqual(true);
        });
        it('7.0000', () => {
          expect(rule(...runtime.buildArgsFor('7.0000'))).toEqual(true);
        });
        it('8.0000', () => {
          expect(rule(...runtime.buildArgsFor('8.0000'))).toEqual(true);
        });
        it('9.0000', () => {
          expect(rule(...runtime.buildArgsFor('9.0000'))).toEqual(true);
        });
        it('10.0000', () => {
          expect(rule(...runtime.buildArgsFor('10.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: gv, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (v == 0 && i % 10 == 1); });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('31', () => {
          expect(rule(...runtime.buildArgsFor('31'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('51', () => {
          expect(rule(...runtime.buildArgsFor('51'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('71', () => {
          expect(rule(...runtime.buildArgsFor('71'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });
    });

    describe('locales: gv, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (v == 0 && i % 10 == 2); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('32', () => {
          expect(rule(...runtime.buildArgsFor('32'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('52', () => {
          expect(rule(...runtime.buildArgsFor('52'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('72', () => {
          expect(rule(...runtime.buildArgsFor('72'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('1002', () => {
          expect(rule(...runtime.buildArgsFor('1002'))).toEqual(true);
        });
      });
    });

    describe('locales: gv, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (v == 0 && ((i % 100 == 0) || (i % 100 == 20) || (i % 100 == 40) || (i % 100 == 60) || (i % 100 == 80))); });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
        it('20', () => {
          expect(rule(...runtime.buildArgsFor('20'))).toEqual(true);
        });
        it('40', () => {
          expect(rule(...runtime.buildArgsFor('40'))).toEqual(true);
        });
        it('60', () => {
          expect(rule(...runtime.buildArgsFor('60'))).toEqual(true);
        });
        it('80', () => {
          expect(rule(...runtime.buildArgsFor('80'))).toEqual(true);
        });
        it('100', () => {
          expect(rule(...runtime.buildArgsFor('100'))).toEqual(true);
        });
        it('120', () => {
          expect(rule(...runtime.buildArgsFor('120'))).toEqual(true);
        });
        it('140', () => {
          expect(rule(...runtime.buildArgsFor('140'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
        it('1000000', () => {
          expect(rule(...runtime.buildArgsFor('1000000'))).toEqual(true);
        });
      });
    });

    describe('locales: gv, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return v != 0; });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.1', () => {
          expect(rule(...runtime.buildArgsFor('0.1'))).toEqual(true);
        });
        it('0.2', () => {
          expect(rule(...runtime.buildArgsFor('0.2'))).toEqual(true);
        });
        it('0.3', () => {
          expect(rule(...runtime.buildArgsFor('0.3'))).toEqual(true);
        });
        it('0.4', () => {
          expect(rule(...runtime.buildArgsFor('0.4'))).toEqual(true);
        });
        it('0.5', () => {
          expect(rule(...runtime.buildArgsFor('0.5'))).toEqual(true);
        });
        it('0.6', () => {
          expect(rule(...runtime.buildArgsFor('0.6'))).toEqual(true);
        });
        it('0.7', () => {
          expect(rule(...runtime.buildArgsFor('0.7'))).toEqual(true);
        });
        it('0.8', () => {
          expect(rule(...runtime.buildArgsFor('0.8'))).toEqual(true);
        });
        it('0.9', () => {
          expect(rule(...runtime.buildArgsFor('0.9'))).toEqual(true);
        });
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.1', () => {
          expect(rule(...runtime.buildArgsFor('1.1'))).toEqual(true);
        });
        it('1.2', () => {
          expect(rule(...runtime.buildArgsFor('1.2'))).toEqual(true);
        });
        it('1.3', () => {
          expect(rule(...runtime.buildArgsFor('1.3'))).toEqual(true);
        });
        it('1.4', () => {
          expect(rule(...runtime.buildArgsFor('1.4'))).toEqual(true);
        });
        it('1.5', () => {
          expect(rule(...runtime.buildArgsFor('1.5'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('100.0', () => {
          expect(rule(...runtime.buildArgsFor('100.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
        it('1000000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: kw, rule: zero;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 0; });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: kw, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: kw, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((((n % 100 == 2) || (n % 100 == 22) || (n % 100 == 42) || (n % 100 == 62) || (n % 100 == 82)) || (n % 1000 == 0 && (((Math.floor(n % 100000) === n % 100000) && (n % 100000 >= 1000) && (n % 100000 <= 20000)) || (n % 100000 == 40000) || (n % 100000 == 60000) || (n % 100000 == 80000)))) || (n != 0 && n % 1000000 == 100000)); });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('42', () => {
          expect(rule(...runtime.buildArgsFor('42'))).toEqual(true);
        });
        it('62', () => {
          expect(rule(...runtime.buildArgsFor('62'))).toEqual(true);
        });
        it('82', () => {
          expect(rule(...runtime.buildArgsFor('82'))).toEqual(true);
        });
        it('102', () => {
          expect(rule(...runtime.buildArgsFor('102'))).toEqual(true);
        });
        it('122', () => {
          expect(rule(...runtime.buildArgsFor('122'))).toEqual(true);
        });
        it('142', () => {
          expect(rule(...runtime.buildArgsFor('142'))).toEqual(true);
        });
        it('1000', () => {
          expect(rule(...runtime.buildArgsFor('1000'))).toEqual(true);
        });
        it('10000', () => {
          expect(rule(...runtime.buildArgsFor('10000'))).toEqual(true);
        });
        it('100000', () => {
          expect(rule(...runtime.buildArgsFor('100000'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('22.0', () => {
          expect(rule(...runtime.buildArgsFor('22.0'))).toEqual(true);
        });
        it('42.0', () => {
          expect(rule(...runtime.buildArgsFor('42.0'))).toEqual(true);
        });
        it('62.0', () => {
          expect(rule(...runtime.buildArgsFor('62.0'))).toEqual(true);
        });
        it('82.0', () => {
          expect(rule(...runtime.buildArgsFor('82.0'))).toEqual(true);
        });
        it('102.0', () => {
          expect(rule(...runtime.buildArgsFor('102.0'))).toEqual(true);
        });
        it('122.0', () => {
          expect(rule(...runtime.buildArgsFor('122.0'))).toEqual(true);
        });
        it('142.0', () => {
          expect(rule(...runtime.buildArgsFor('142.0'))).toEqual(true);
        });
        it('1000.0', () => {
          expect(rule(...runtime.buildArgsFor('1000.0'))).toEqual(true);
        });
        it('10000.0', () => {
          expect(rule(...runtime.buildArgsFor('10000.0'))).toEqual(true);
        });
        it('100000.0', () => {
          expect(rule(...runtime.buildArgsFor('100000.0'))).toEqual(true);
        });
      });
    });

    describe('locales: kw, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((n % 100 == 3) || (n % 100 == 23) || (n % 100 == 43) || (n % 100 == 63) || (n % 100 == 83)); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('43', () => {
          expect(rule(...runtime.buildArgsFor('43'))).toEqual(true);
        });
        it('63', () => {
          expect(rule(...runtime.buildArgsFor('63'))).toEqual(true);
        });
        it('83', () => {
          expect(rule(...runtime.buildArgsFor('83'))).toEqual(true);
        });
        it('103', () => {
          expect(rule(...runtime.buildArgsFor('103'))).toEqual(true);
        });
        it('123', () => {
          expect(rule(...runtime.buildArgsFor('123'))).toEqual(true);
        });
        it('143', () => {
          expect(rule(...runtime.buildArgsFor('143'))).toEqual(true);
        });
        it('1003', () => {
          expect(rule(...runtime.buildArgsFor('1003'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('23.0', () => {
          expect(rule(...runtime.buildArgsFor('23.0'))).toEqual(true);
        });
        it('43.0', () => {
          expect(rule(...runtime.buildArgsFor('43.0'))).toEqual(true);
        });
        it('63.0', () => {
          expect(rule(...runtime.buildArgsFor('63.0'))).toEqual(true);
        });
        it('83.0', () => {
          expect(rule(...runtime.buildArgsFor('83.0'))).toEqual(true);
        });
        it('103.0', () => {
          expect(rule(...runtime.buildArgsFor('103.0'))).toEqual(true);
        });
        it('123.0', () => {
          expect(rule(...runtime.buildArgsFor('123.0'))).toEqual(true);
        });
        it('143.0', () => {
          expect(rule(...runtime.buildArgsFor('143.0'))).toEqual(true);
        });
        it('1003.0', () => {
          expect(rule(...runtime.buildArgsFor('1003.0'))).toEqual(true);
        });
      });
    });

    describe('locales: kw, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return (n != 1 && ((n % 100 == 1) || (n % 100 == 21) || (n % 100 == 41) || (n % 100 == 61) || (n % 100 == 81))); });

      describe('@integer', () => {
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('41', () => {
          expect(rule(...runtime.buildArgsFor('41'))).toEqual(true);
        });
        it('61', () => {
          expect(rule(...runtime.buildArgsFor('61'))).toEqual(true);
        });
        it('81', () => {
          expect(rule(...runtime.buildArgsFor('81'))).toEqual(true);
        });
        it('101', () => {
          expect(rule(...runtime.buildArgsFor('101'))).toEqual(true);
        });
        it('121', () => {
          expect(rule(...runtime.buildArgsFor('121'))).toEqual(true);
        });
        it('141', () => {
          expect(rule(...runtime.buildArgsFor('141'))).toEqual(true);
        });
        it('161', () => {
          expect(rule(...runtime.buildArgsFor('161'))).toEqual(true);
        });
        it('1001', () => {
          expect(rule(...runtime.buildArgsFor('1001'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('21.0', () => {
          expect(rule(...runtime.buildArgsFor('21.0'))).toEqual(true);
        });
        it('41.0', () => {
          expect(rule(...runtime.buildArgsFor('41.0'))).toEqual(true);
        });
        it('61.0', () => {
          expect(rule(...runtime.buildArgsFor('61.0'))).toEqual(true);
        });
        it('81.0', () => {
          expect(rule(...runtime.buildArgsFor('81.0'))).toEqual(true);
        });
        it('101.0', () => {
          expect(rule(...runtime.buildArgsFor('101.0'))).toEqual(true);
        });
        it('121.0', () => {
          expect(rule(...runtime.buildArgsFor('121.0'))).toEqual(true);
        });
        it('141.0', () => {
          expect(rule(...runtime.buildArgsFor('141.0'))).toEqual(true);
        });
        it('161.0', () => {
          expect(rule(...runtime.buildArgsFor('161.0'))).toEqual(true);
        });
        it('1001.0', () => {
          expect(rule(...runtime.buildArgsFor('1001.0'))).toEqual(true);
        });
      });
    });

    describe('locales: ar/ars, rule: zero;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 0; });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ar/ars, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ar/ars, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 2; });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('2.00', () => {
          expect(rule(...runtime.buildArgsFor('2.00'))).toEqual(true);
        });
        it('2.000', () => {
          expect(rule(...runtime.buildArgsFor('2.000'))).toEqual(true);
        });
        it('2.0000', () => {
          expect(rule(...runtime.buildArgsFor('2.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: ar/ars, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n % 100) === n % 100) && (n % 100 >= 3) && (n % 100 <= 10)); });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
        it('4', () => {
          expect(rule(...runtime.buildArgsFor('4'))).toEqual(true);
        });
        it('5', () => {
          expect(rule(...runtime.buildArgsFor('5'))).toEqual(true);
        });
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
        it('7', () => {
          expect(rule(...runtime.buildArgsFor('7'))).toEqual(true);
        });
        it('8', () => {
          expect(rule(...runtime.buildArgsFor('8'))).toEqual(true);
        });
        it('9', () => {
          expect(rule(...runtime.buildArgsFor('9'))).toEqual(true);
        });
        it('10', () => {
          expect(rule(...runtime.buildArgsFor('10'))).toEqual(true);
        });
        it('103', () => {
          expect(rule(...runtime.buildArgsFor('103'))).toEqual(true);
        });
        it('104', () => {
          expect(rule(...runtime.buildArgsFor('104'))).toEqual(true);
        });
        it('105', () => {
          expect(rule(...runtime.buildArgsFor('105'))).toEqual(true);
        });
        it('106', () => {
          expect(rule(...runtime.buildArgsFor('106'))).toEqual(true);
        });
        it('107', () => {
          expect(rule(...runtime.buildArgsFor('107'))).toEqual(true);
        });
        it('108', () => {
          expect(rule(...runtime.buildArgsFor('108'))).toEqual(true);
        });
        it('109', () => {
          expect(rule(...runtime.buildArgsFor('109'))).toEqual(true);
        });
        it('110', () => {
          expect(rule(...runtime.buildArgsFor('110'))).toEqual(true);
        });
        it('1003', () => {
          expect(rule(...runtime.buildArgsFor('1003'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('4.0', () => {
          expect(rule(...runtime.buildArgsFor('4.0'))).toEqual(true);
        });
        it('5.0', () => {
          expect(rule(...runtime.buildArgsFor('5.0'))).toEqual(true);
        });
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('7.0', () => {
          expect(rule(...runtime.buildArgsFor('7.0'))).toEqual(true);
        });
        it('8.0', () => {
          expect(rule(...runtime.buildArgsFor('8.0'))).toEqual(true);
        });
        it('9.0', () => {
          expect(rule(...runtime.buildArgsFor('9.0'))).toEqual(true);
        });
        it('10.0', () => {
          expect(rule(...runtime.buildArgsFor('10.0'))).toEqual(true);
        });
        it('103.0', () => {
          expect(rule(...runtime.buildArgsFor('103.0'))).toEqual(true);
        });
        it('1003.0', () => {
          expect(rule(...runtime.buildArgsFor('1003.0'))).toEqual(true);
        });
      });
    });

    describe('locales: ar/ars, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return ((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 99)); });

      describe('@integer', () => {
        it('11', () => {
          expect(rule(...runtime.buildArgsFor('11'))).toEqual(true);
        });
        it('12', () => {
          expect(rule(...runtime.buildArgsFor('12'))).toEqual(true);
        });
        it('13', () => {
          expect(rule(...runtime.buildArgsFor('13'))).toEqual(true);
        });
        it('14', () => {
          expect(rule(...runtime.buildArgsFor('14'))).toEqual(true);
        });
        it('15', () => {
          expect(rule(...runtime.buildArgsFor('15'))).toEqual(true);
        });
        it('16', () => {
          expect(rule(...runtime.buildArgsFor('16'))).toEqual(true);
        });
        it('17', () => {
          expect(rule(...runtime.buildArgsFor('17'))).toEqual(true);
        });
        it('18', () => {
          expect(rule(...runtime.buildArgsFor('18'))).toEqual(true);
        });
        it('19', () => {
          expect(rule(...runtime.buildArgsFor('19'))).toEqual(true);
        });
        it('20', () => {
          expect(rule(...runtime.buildArgsFor('20'))).toEqual(true);
        });
        it('21', () => {
          expect(rule(...runtime.buildArgsFor('21'))).toEqual(true);
        });
        it('22', () => {
          expect(rule(...runtime.buildArgsFor('22'))).toEqual(true);
        });
        it('23', () => {
          expect(rule(...runtime.buildArgsFor('23'))).toEqual(true);
        });
        it('24', () => {
          expect(rule(...runtime.buildArgsFor('24'))).toEqual(true);
        });
        it('25', () => {
          expect(rule(...runtime.buildArgsFor('25'))).toEqual(true);
        });
        it('26', () => {
          expect(rule(...runtime.buildArgsFor('26'))).toEqual(true);
        });
        it('111', () => {
          expect(rule(...runtime.buildArgsFor('111'))).toEqual(true);
        });
        it('1011', () => {
          expect(rule(...runtime.buildArgsFor('1011'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('11.0', () => {
          expect(rule(...runtime.buildArgsFor('11.0'))).toEqual(true);
        });
        it('12.0', () => {
          expect(rule(...runtime.buildArgsFor('12.0'))).toEqual(true);
        });
        it('13.0', () => {
          expect(rule(...runtime.buildArgsFor('13.0'))).toEqual(true);
        });
        it('14.0', () => {
          expect(rule(...runtime.buildArgsFor('14.0'))).toEqual(true);
        });
        it('15.0', () => {
          expect(rule(...runtime.buildArgsFor('15.0'))).toEqual(true);
        });
        it('16.0', () => {
          expect(rule(...runtime.buildArgsFor('16.0'))).toEqual(true);
        });
        it('17.0', () => {
          expect(rule(...runtime.buildArgsFor('17.0'))).toEqual(true);
        });
        it('18.0', () => {
          expect(rule(...runtime.buildArgsFor('18.0'))).toEqual(true);
        });
        it('111.0', () => {
          expect(rule(...runtime.buildArgsFor('111.0'))).toEqual(true);
        });
        it('1011.0', () => {
          expect(rule(...runtime.buildArgsFor('1011.0'))).toEqual(true);
        });
      });
    });

    describe('locales: cy, rule: zero;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 0; });

      describe('@integer', () => {
        it('0', () => {
          expect(rule(...runtime.buildArgsFor('0'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('0.0', () => {
          expect(rule(...runtime.buildArgsFor('0.0'))).toEqual(true);
        });
        it('0.00', () => {
          expect(rule(...runtime.buildArgsFor('0.00'))).toEqual(true);
        });
        it('0.000', () => {
          expect(rule(...runtime.buildArgsFor('0.000'))).toEqual(true);
        });
        it('0.0000', () => {
          expect(rule(...runtime.buildArgsFor('0.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: cy, rule: one;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 1; });

      describe('@integer', () => {
        it('1', () => {
          expect(rule(...runtime.buildArgsFor('1'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('1.0', () => {
          expect(rule(...runtime.buildArgsFor('1.0'))).toEqual(true);
        });
        it('1.00', () => {
          expect(rule(...runtime.buildArgsFor('1.00'))).toEqual(true);
        });
        it('1.000', () => {
          expect(rule(...runtime.buildArgsFor('1.000'))).toEqual(true);
        });
        it('1.0000', () => {
          expect(rule(...runtime.buildArgsFor('1.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: cy, rule: two;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 2; });

      describe('@integer', () => {
        it('2', () => {
          expect(rule(...runtime.buildArgsFor('2'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('2.0', () => {
          expect(rule(...runtime.buildArgsFor('2.0'))).toEqual(true);
        });
        it('2.00', () => {
          expect(rule(...runtime.buildArgsFor('2.00'))).toEqual(true);
        });
        it('2.000', () => {
          expect(rule(...runtime.buildArgsFor('2.000'))).toEqual(true);
        });
        it('2.0000', () => {
          expect(rule(...runtime.buildArgsFor('2.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: cy, rule: few;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 3; });

      describe('@integer', () => {
        it('3', () => {
          expect(rule(...runtime.buildArgsFor('3'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('3.0', () => {
          expect(rule(...runtime.buildArgsFor('3.0'))).toEqual(true);
        });
        it('3.00', () => {
          expect(rule(...runtime.buildArgsFor('3.00'))).toEqual(true);
        });
        it('3.000', () => {
          expect(rule(...runtime.buildArgsFor('3.000'))).toEqual(true);
        });
        it('3.0000', () => {
          expect(rule(...runtime.buildArgsFor('3.0000'))).toEqual(true);
        });
      });
    });

    describe('locales: cy, rule: many;', () => {
      const rule = (function(n, i, f, t, v, w, e) { return n == 6; });

      describe('@integer', () => {
        it('6', () => {
          expect(rule(...runtime.buildArgsFor('6'))).toEqual(true);
        });
      });

      describe('@decimal', () => {
        it('6.0', () => {
          expect(rule(...runtime.buildArgsFor('6.0'))).toEqual(true);
        });
        it('6.00', () => {
          expect(rule(...runtime.buildArgsFor('6.00'))).toEqual(true);
        });
        it('6.000', () => {
          expect(rule(...runtime.buildArgsFor('6.000'))).toEqual(true);
        });
        it('6.0000', () => {
          expect(rule(...runtime.buildArgsFor('6.0000'))).toEqual(true);
        });
      });
    });
  });

  describe('javascript rule lists', () => {
    describe('bm/bo/dz/id/ig/ii/in/ja/jbo/jv/jw/kde/kea/km/ko/lkt/lo/ms/my/nqo/osa/root/sah/ses/sg/su/th/to/vi/wo/yo/yue/zh', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return 'other'; });

      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 1', () => {
        expect(ruleList('1', runtime)).toEqual('other');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('am/as/bn/doi/fa/gu/hi/kn/pcm/zu', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 0 || n == 1) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.01', () => {
        expect(ruleList('0.01', runtime)).toEqual('one');
      });
      it('one 0.02', () => {
        expect(ruleList('0.02', runtime)).toEqual('one');
      });
      it('one 0.03', () => {
        expect(ruleList('0.03', runtime)).toEqual('one');
      });
      it('one 0.04', () => {
        expect(ruleList('0.04', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('other');
      });
      it('other 1.9', () => {
        expect(ruleList('1.9', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ff/hy/kab', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((i == 0) || (i == 1)) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 2.8', () => {
        expect(ruleList('2.8', runtime)).toEqual('other');
      });
      it('other 2.9', () => {
        expect(ruleList('2.9', runtime)).toEqual('other');
      });
      it('other 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('other');
      });
      it('other 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('other');
      });
      it('other 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('other');
      });
      it('other 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('other');
      });
      it('other 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('other');
      });
      it('other 3.5', () => {
        expect(ruleList('3.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('pt', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((Math.floor(i) === i) && (i >= 0) && (i <= 1)) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 2.8', () => {
        expect(ruleList('2.8', runtime)).toEqual('other');
      });
      it('other 2.9', () => {
        expect(ruleList('2.9', runtime)).toEqual('other');
      });
      it('other 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('other');
      });
      it('other 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('other');
      });
      it('other 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('other');
      });
      it('other 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('other');
      });
      it('other 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('other');
      });
      it('other 3.5', () => {
        expect(ruleList('3.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ast/ca/de/en/et/fi/fy/gl/ia/io/it/ji/lij/nl/pt_PT/sc/scn/sv/sw/ur/yi', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 1 && v == 0) ? 'one' : 'other'); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('si', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((((n == 0) || (n == 1)) || (i == 0 && f == 1)) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('one');
      });
      it('one 0.01', () => {
        expect(ruleList('0.01', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('one');
      });
      it('one 0.001', () => {
        expect(ruleList('0.001', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('one');
      });
      it('one 0.0001', () => {
        expect(ruleList('0.0001', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ak/bho/guw/ln/mg/nso/pa/ti/wa', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((Math.floor(n) === n) && (n >= 0) && (n <= 1)) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('tzm', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((((Math.floor(n) === n) && (n >= 0) && (n <= 1)) || ((Math.floor(n) === n) && (n >= 11) && (n <= 99))) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 11', () => {
        expect(ruleList('11', runtime)).toEqual('one');
      });
      it('one 12', () => {
        expect(ruleList('12', runtime)).toEqual('one');
      });
      it('one 13', () => {
        expect(ruleList('13', runtime)).toEqual('one');
      });
      it('one 14', () => {
        expect(ruleList('14', runtime)).toEqual('one');
      });
      it('one 15', () => {
        expect(ruleList('15', runtime)).toEqual('one');
      });
      it('one 16', () => {
        expect(ruleList('16', runtime)).toEqual('one');
      });
      it('one 17', () => {
        expect(ruleList('17', runtime)).toEqual('one');
      });
      it('one 18', () => {
        expect(ruleList('18', runtime)).toEqual('one');
      });
      it('one 19', () => {
        expect(ruleList('19', runtime)).toEqual('one');
      });
      it('one 20', () => {
        expect(ruleList('20', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 22', () => {
        expect(ruleList('22', runtime)).toEqual('one');
      });
      it('one 23', () => {
        expect(ruleList('23', runtime)).toEqual('one');
      });
      it('one 24', () => {
        expect(ruleList('24', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('one');
      });
      it('one 12.0', () => {
        expect(ruleList('12.0', runtime)).toEqual('one');
      });
      it('one 13.0', () => {
        expect(ruleList('13.0', runtime)).toEqual('one');
      });
      it('one 14.0', () => {
        expect(ruleList('14.0', runtime)).toEqual('one');
      });
      it('one 15.0', () => {
        expect(ruleList('15.0', runtime)).toEqual('one');
      });
      it('one 16.0', () => {
        expect(ruleList('16.0', runtime)).toEqual('one');
      });
      it('one 17.0', () => {
        expect(ruleList('17.0', runtime)).toEqual('one');
      });
      it('one 18.0', () => {
        expect(ruleList('18.0', runtime)).toEqual('one');
      });
      it('one 19.0', () => {
        expect(ruleList('19.0', runtime)).toEqual('one');
      });
      it('one 20.0', () => {
        expect(ruleList('20.0', runtime)).toEqual('one');
      });
      it('one 21.0', () => {
        expect(ruleList('21.0', runtime)).toEqual('one');
      });
      it('one 22.0', () => {
        expect(ruleList('22.0', runtime)).toEqual('one');
      });
      it('one 23.0', () => {
        expect(ruleList('23.0', runtime)).toEqual('one');
      });
      it('one 24.0', () => {
        expect(ruleList('24.0', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 101', () => {
        expect(ruleList('101', runtime)).toEqual('other');
      });
      it('other 102', () => {
        expect(ruleList('102', runtime)).toEqual('other');
      });
      it('other 103', () => {
        expect(ruleList('103', runtime)).toEqual('other');
      });
      it('other 104', () => {
        expect(ruleList('104', runtime)).toEqual('other');
      });
      it('other 105', () => {
        expect(ruleList('105', runtime)).toEqual('other');
      });
      it('other 106', () => {
        expect(ruleList('106', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('af/an/asa/az/bem/bez/bg/brx/ce/cgg/chr/ckb/dv/ee/el/eo/es/eu/fo/fur/gsw/ha/haw/hu/jgo/jmc/ka/kaj/kcg/kk/kkj/kl/ks/ksb/ku/ky/lb/lg/mas/mgo/ml/mn/mr/nah/nb/nd/ne/nn/nnh/no/nr/ny/nyn/om/or/os/pap/ps/rm/rof/rwk/saq/sd/sdh/seh/sn/so/sq/ss/ssy/st/syr/ta/te/teo/tig/tk/tn/tr/ts/ug/uz/ve/vo/vun/wae/xh/xog', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 1 ? 'one' : 'other'); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('da', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((n == 1 || (t != 0 && ((i == 0) || (i == 1)))) ? 'one' : 'other'); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('one 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('one');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 2.8', () => {
        expect(ruleList('2.8', runtime)).toEqual('other');
      });
      it('other 2.9', () => {
        expect(ruleList('2.9', runtime)).toEqual('other');
      });
      it('other 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('other');
      });
      it('other 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('other');
      });
      it('other 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('other');
      });
      it('other 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('other');
      });
      it('other 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('is', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((((t == 0 && i % 10 == 1) && i % 100 != 11) || t != 0) ? 'one' : 'other'); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('one 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('one');
      });
      it('one 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('one');
      });
      it('one 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('one');
      });
      it('one 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('one');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('other');
      });
      it('other 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('other');
      });
      it('other 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('other');
      });
      it('other 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('other');
      });
      it('other 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('other');
      });
      it('other 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('mk', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((((v == 0 && i % 10 == 1) && i % 100 != 11) || (f % 10 == 1 && f % 100 != 11)) ? 'one' : 'other'); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('one');
      });
      it('one 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('one');
      });
      it('one 4.1', () => {
        expect(ruleList('4.1', runtime)).toEqual('one');
      });
      it('one 5.1', () => {
        expect(ruleList('5.1', runtime)).toEqual('one');
      });
      it('one 6.1', () => {
        expect(ruleList('6.1', runtime)).toEqual('one');
      });
      it('one 7.1', () => {
        expect(ruleList('7.1', runtime)).toEqual('one');
      });
      it('one 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('one');
      });
      it('one 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('one');
      });
      it('one 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('one');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ceb/fil/tl', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((((v == 0 && ((i == 1) || (i == 2) || (i == 3))) || (v == 0 && ((i % 10 != 4) && (i % 10 != 6) && (i % 10 != 9)))) || (v != 0 && ((f % 10 != 4) && (f % 10 != 6) && (f % 10 != 9)))) ? 'one' : 'other'); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 2', () => {
        expect(ruleList('2', runtime)).toEqual('one');
      });
      it('one 3', () => {
        expect(ruleList('3', runtime)).toEqual('one');
      });
      it('one 5', () => {
        expect(ruleList('5', runtime)).toEqual('one');
      });
      it('one 7', () => {
        expect(ruleList('7', runtime)).toEqual('one');
      });
      it('one 8', () => {
        expect(ruleList('8', runtime)).toEqual('one');
      });
      it('one 10', () => {
        expect(ruleList('10', runtime)).toEqual('one');
      });
      it('one 11', () => {
        expect(ruleList('11', runtime)).toEqual('one');
      });
      it('one 12', () => {
        expect(ruleList('12', runtime)).toEqual('one');
      });
      it('one 13', () => {
        expect(ruleList('13', runtime)).toEqual('one');
      });
      it('one 15', () => {
        expect(ruleList('15', runtime)).toEqual('one');
      });
      it('one 17', () => {
        expect(ruleList('17', runtime)).toEqual('one');
      });
      it('one 18', () => {
        expect(ruleList('18', runtime)).toEqual('one');
      });
      it('one 20', () => {
        expect(ruleList('20', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 100', () => {
        expect(ruleList('100', runtime)).toEqual('one');
      });
      it('one 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('one');
      });
      it('one 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('one');
      });
      it('one 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('one');
      });
      it('one 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('one 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('one');
      });
      it('one 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('one');
      });
      it('one 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('one');
      });
      it('one 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('one');
      });
      it('one 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('one');
      });
      it('one 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('one');
      });
      it('one 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('one');
      });
      it('one 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('one');
      });
      it('one 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('one');
      });
      it('one 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('one');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 26', () => {
        expect(ruleList('26', runtime)).toEqual('other');
      });
      it('other 104', () => {
        expect(ruleList('104', runtime)).toEqual('other');
      });
      it('other 1004', () => {
        expect(ruleList('1004', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.9', () => {
        expect(ruleList('1.9', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 10.4', () => {
        expect(ruleList('10.4', runtime)).toEqual('other');
      });
      it('other 100.4', () => {
        expect(ruleList('100.4', runtime)).toEqual('other');
      });
      it('other 1000.4', () => {
        expect(ruleList('1000.4', runtime)).toEqual('other');
      });
    });

    describe('lv/prg', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((n % 10 == 0 || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19))) || (v == 2 && ((Math.floor(f % 100) === f % 100) && (f % 100 >= 11) && (f % 100 <= 19)))) ? 'zero' : ((((n % 10 == 1 && n % 100 != 11) || ((v == 2 && f % 10 == 1) && f % 100 != 11)) || (v != 2 && f % 10 == 1)) ? 'one' : 'other')); });

      it('zero 0', () => {
        expect(ruleList('0', runtime)).toEqual('zero');
      });
      it('zero 10', () => {
        expect(ruleList('10', runtime)).toEqual('zero');
      });
      it('zero 11', () => {
        expect(ruleList('11', runtime)).toEqual('zero');
      });
      it('zero 12', () => {
        expect(ruleList('12', runtime)).toEqual('zero');
      });
      it('zero 13', () => {
        expect(ruleList('13', runtime)).toEqual('zero');
      });
      it('zero 14', () => {
        expect(ruleList('14', runtime)).toEqual('zero');
      });
      it('zero 15', () => {
        expect(ruleList('15', runtime)).toEqual('zero');
      });
      it('zero 16', () => {
        expect(ruleList('16', runtime)).toEqual('zero');
      });
      it('zero 17', () => {
        expect(ruleList('17', runtime)).toEqual('zero');
      });
      it('zero 18', () => {
        expect(ruleList('18', runtime)).toEqual('zero');
      });
      it('zero 19', () => {
        expect(ruleList('19', runtime)).toEqual('zero');
      });
      it('zero 20', () => {
        expect(ruleList('20', runtime)).toEqual('zero');
      });
      it('zero 30', () => {
        expect(ruleList('30', runtime)).toEqual('zero');
      });
      it('zero 40', () => {
        expect(ruleList('40', runtime)).toEqual('zero');
      });
      it('zero 50', () => {
        expect(ruleList('50', runtime)).toEqual('zero');
      });
      it('zero 60', () => {
        expect(ruleList('60', runtime)).toEqual('zero');
      });
      it('zero 100', () => {
        expect(ruleList('100', runtime)).toEqual('zero');
      });
      it('zero 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('zero');
      });
      it('zero 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('zero');
      });
      it('zero 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('zero');
      });
      it('zero 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('zero');
      });
      it('zero 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('zero');
      });
      it('zero 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('zero');
      });
      it('zero 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('zero');
      });
      it('zero 12.0', () => {
        expect(ruleList('12.0', runtime)).toEqual('zero');
      });
      it('zero 13.0', () => {
        expect(ruleList('13.0', runtime)).toEqual('zero');
      });
      it('zero 14.0', () => {
        expect(ruleList('14.0', runtime)).toEqual('zero');
      });
      it('zero 15.0', () => {
        expect(ruleList('15.0', runtime)).toEqual('zero');
      });
      it('zero 16.0', () => {
        expect(ruleList('16.0', runtime)).toEqual('zero');
      });
      it('zero 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('zero');
      });
      it('zero 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('zero');
      });
      it('zero 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('zero');
      });
      it('zero 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('zero');
      });
      it('zero 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('zero');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('one');
      });
      it('one 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('one');
      });
      it('one 4.1', () => {
        expect(ruleList('4.1', runtime)).toEqual('one');
      });
      it('one 5.1', () => {
        expect(ruleList('5.1', runtime)).toEqual('one');
      });
      it('one 6.1', () => {
        expect(ruleList('6.1', runtime)).toEqual('one');
      });
      it('one 7.1', () => {
        expect(ruleList('7.1', runtime)).toEqual('one');
      });
      it('one 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('one');
      });
      it('one 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('one');
      });
      it('one 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 22', () => {
        expect(ruleList('22', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 25', () => {
        expect(ruleList('25', runtime)).toEqual('other');
      });
      it('other 26', () => {
        expect(ruleList('26', runtime)).toEqual('other');
      });
      it('other 27', () => {
        expect(ruleList('27', runtime)).toEqual('other');
      });
      it('other 28', () => {
        expect(ruleList('28', runtime)).toEqual('other');
      });
      it('other 29', () => {
        expect(ruleList('29', runtime)).toEqual('other');
      });
      it('other 102', () => {
        expect(ruleList('102', runtime)).toEqual('other');
      });
      it('other 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('other');
      });
      it('other 1.9', () => {
        expect(ruleList('1.9', runtime)).toEqual('other');
      });
      it('other 10.2', () => {
        expect(ruleList('10.2', runtime)).toEqual('other');
      });
      it('other 100.2', () => {
        expect(ruleList('100.2', runtime)).toEqual('other');
      });
      it('other 1000.2', () => {
        expect(ruleList('1000.2', runtime)).toEqual('other');
      });
    });

    describe('lag', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 0 ? 'zero' : ((((i == 0) || (i == 1)) && n != 0) ? 'one' : 'other')); });

      it('zero 0', () => {
        expect(ruleList('0', runtime)).toEqual('zero');
      });
      it('zero 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('zero');
      });
      it('zero 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('zero');
      });
      it('zero 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('zero');
      });
      it('zero 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('zero');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('one 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 2.8', () => {
        expect(ruleList('2.8', runtime)).toEqual('other');
      });
      it('other 2.9', () => {
        expect(ruleList('2.9', runtime)).toEqual('other');
      });
      it('other 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('other');
      });
      it('other 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('other');
      });
      it('other 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('other');
      });
      it('other 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('other');
      });
      it('other 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('other');
      });
      it('other 3.5', () => {
        expect(ruleList('3.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ksh', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 0 ? 'zero' : (n == 1 ? 'one' : 'other')); });

      it('zero 0', () => {
        expect(ruleList('0', runtime)).toEqual('zero');
      });
      it('zero 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('zero');
      });
      it('zero 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('zero');
      });
      it('zero 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('zero');
      });
      it('zero 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('zero');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('iu/naq/sat/se/sma/smi/smj/smn/sms', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 1 ? 'one' : (n == 2 ? 'two' : 'other')); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 2.00', () => {
        expect(ruleList('2.00', runtime)).toEqual('two');
      });
      it('two 2.000', () => {
        expect(ruleList('2.000', runtime)).toEqual('two');
      });
      it('two 2.0000', () => {
        expect(ruleList('2.0000', runtime)).toEqual('two');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('shi', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 0 || n == 1) ? 'one' : (((Math.floor(n) === n) && (n >= 2) && (n <= 10)) ? 'few' : 'other')); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.01', () => {
        expect(ruleList('0.01', runtime)).toEqual('one');
      });
      it('one 0.02', () => {
        expect(ruleList('0.02', runtime)).toEqual('one');
      });
      it('one 0.03', () => {
        expect(ruleList('0.03', runtime)).toEqual('one');
      });
      it('one 0.04', () => {
        expect(ruleList('0.04', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 7', () => {
        expect(ruleList('7', runtime)).toEqual('few');
      });
      it('few 8', () => {
        expect(ruleList('8', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 10', () => {
        expect(ruleList('10', runtime)).toEqual('few');
      });
      it('few 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('few');
      });
      it('few 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('few');
      });
      it('few 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('few');
      });
      it('few 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('few');
      });
      it('few 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('few');
      });
      it('few 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('few');
      });
      it('few 2.00', () => {
        expect(ruleList('2.00', runtime)).toEqual('few');
      });
      it('few 3.00', () => {
        expect(ruleList('3.00', runtime)).toEqual('few');
      });
      it('few 4.00', () => {
        expect(ruleList('4.00', runtime)).toEqual('few');
      });
      it('few 5.00', () => {
        expect(ruleList('5.00', runtime)).toEqual('few');
      });
      it('few 6.00', () => {
        expect(ruleList('6.00', runtime)).toEqual('few');
      });
      it('few 7.00', () => {
        expect(ruleList('7.00', runtime)).toEqual('few');
      });
      it('few 8.00', () => {
        expect(ruleList('8.00', runtime)).toEqual('few');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 21', () => {
        expect(ruleList('21', runtime)).toEqual('other');
      });
      it('other 22', () => {
        expect(ruleList('22', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 25', () => {
        expect(ruleList('25', runtime)).toEqual('other');
      });
      it('other 26', () => {
        expect(ruleList('26', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('other');
      });
      it('other 1.9', () => {
        expect(ruleList('1.9', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('mo/ro', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 1 && v == 0) ? 'one' : (((v != 0 || n == 0) || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 2) && (n % 100 <= 19))) ? 'few' : 'other')); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('few 0', () => {
        expect(ruleList('0', runtime)).toEqual('few');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 7', () => {
        expect(ruleList('7', runtime)).toEqual('few');
      });
      it('few 8', () => {
        expect(ruleList('8', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 10', () => {
        expect(ruleList('10', runtime)).toEqual('few');
      });
      it('few 11', () => {
        expect(ruleList('11', runtime)).toEqual('few');
      });
      it('few 12', () => {
        expect(ruleList('12', runtime)).toEqual('few');
      });
      it('few 13', () => {
        expect(ruleList('13', runtime)).toEqual('few');
      });
      it('few 14', () => {
        expect(ruleList('14', runtime)).toEqual('few');
      });
      it('few 15', () => {
        expect(ruleList('15', runtime)).toEqual('few');
      });
      it('few 16', () => {
        expect(ruleList('16', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('few 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('few');
      });
      it('few 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('few');
      });
      it('few 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('few');
      });
      it('few 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('few');
      });
      it('few 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('few');
      });
      it('few 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('few');
      });
      it('few 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('few');
      });
      it('few 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('few');
      });
      it('few 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('few');
      });
      it('few 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('few');
      });
      it('few 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('few');
      });
      it('few 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('few');
      });
      it('few 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('few');
      });
      it('few 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('few');
      });
      it('few 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('few');
      });
      it('few 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('few');
      });
      it('few 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('few');
      });
      it('few 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('few');
      });
      it('few 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('few');
      });
      it('few 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('few');
      });
      it('few 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('few');
      });
      it('few 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('few');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 21', () => {
        expect(ruleList('21', runtime)).toEqual('other');
      });
      it('other 22', () => {
        expect(ruleList('22', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 25', () => {
        expect(ruleList('25', runtime)).toEqual('other');
      });
      it('other 26', () => {
        expect(ruleList('26', runtime)).toEqual('other');
      });
      it('other 27', () => {
        expect(ruleList('27', runtime)).toEqual('other');
      });
      it('other 28', () => {
        expect(ruleList('28', runtime)).toEqual('other');
      });
      it('other 29', () => {
        expect(ruleList('29', runtime)).toEqual('other');
      });
      it('other 30', () => {
        expect(ruleList('30', runtime)).toEqual('other');
      });
      it('other 31', () => {
        expect(ruleList('31', runtime)).toEqual('other');
      });
      it('other 32', () => {
        expect(ruleList('32', runtime)).toEqual('other');
      });
      it('other 33', () => {
        expect(ruleList('33', runtime)).toEqual('other');
      });
      it('other 34', () => {
        expect(ruleList('34', runtime)).toEqual('other');
      });
      it('other 35', () => {
        expect(ruleList('35', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
    });

    describe('bs/hr/sh/sr', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((((v == 0 && i % 10 == 1) && i % 100 != 11) || (f % 10 == 1 && f % 100 != 11)) ? 'one' : ((((v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 2) && (i % 10 <= 4))) && !((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14))) || (((Math.floor(f % 10) === f % 10) && (f % 10 >= 2) && (f % 10 <= 4)) && !((Math.floor(f % 100) === f % 100) && (f % 100 >= 12) && (f % 100 <= 14)))) ? 'few' : 'other')); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('one');
      });
      it('one 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('one');
      });
      it('one 4.1', () => {
        expect(ruleList('4.1', runtime)).toEqual('one');
      });
      it('one 5.1', () => {
        expect(ruleList('5.1', runtime)).toEqual('one');
      });
      it('one 6.1', () => {
        expect(ruleList('6.1', runtime)).toEqual('one');
      });
      it('one 7.1', () => {
        expect(ruleList('7.1', runtime)).toEqual('one');
      });
      it('one 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('one');
      });
      it('one 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('one');
      });
      it('one 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 22', () => {
        expect(ruleList('22', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 24', () => {
        expect(ruleList('24', runtime)).toEqual('few');
      });
      it('few 32', () => {
        expect(ruleList('32', runtime)).toEqual('few');
      });
      it('few 33', () => {
        expect(ruleList('33', runtime)).toEqual('few');
      });
      it('few 34', () => {
        expect(ruleList('34', runtime)).toEqual('few');
      });
      it('few 42', () => {
        expect(ruleList('42', runtime)).toEqual('few');
      });
      it('few 43', () => {
        expect(ruleList('43', runtime)).toEqual('few');
      });
      it('few 44', () => {
        expect(ruleList('44', runtime)).toEqual('few');
      });
      it('few 52', () => {
        expect(ruleList('52', runtime)).toEqual('few');
      });
      it('few 53', () => {
        expect(ruleList('53', runtime)).toEqual('few');
      });
      it('few 54', () => {
        expect(ruleList('54', runtime)).toEqual('few');
      });
      it('few 62', () => {
        expect(ruleList('62', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('few 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('few');
      });
      it('few 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('few');
      });
      it('few 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('few');
      });
      it('few 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('few');
      });
      it('few 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('few');
      });
      it('few 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('few');
      });
      it('few 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('few');
      });
      it('few 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('few');
      });
      it('few 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('few');
      });
      it('few 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('few');
      });
      it('few 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('few');
      });
      it('few 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('few');
      });
      it('few 4.2', () => {
        expect(ruleList('4.2', runtime)).toEqual('few');
      });
      it('few 4.3', () => {
        expect(ruleList('4.3', runtime)).toEqual('few');
      });
      it('few 4.4', () => {
        expect(ruleList('4.4', runtime)).toEqual('few');
      });
      it('few 5.2', () => {
        expect(ruleList('5.2', runtime)).toEqual('few');
      });
      it('few 10.2', () => {
        expect(ruleList('10.2', runtime)).toEqual('few');
      });
      it('few 100.2', () => {
        expect(ruleList('100.2', runtime)).toEqual('few');
      });
      it('few 1000.2', () => {
        expect(ruleList('1000.2', runtime)).toEqual('few');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('other');
      });
      it('other 1.9', () => {
        expect(ruleList('1.9', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('fr', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((i == 0) || (i == 1)) ? 'one' : (((((e == 0 && i != 0) && i % 1000000 == 0) && v == 0) || !((Math.floor(e) === e) && (e >= 0) && (e <= 5))) ? 'many' : 'other')); });

      it('one 0', () => {
        expect(ruleList('0', runtime)).toEqual('one');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('one');
      });
      it('one 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('one');
      });
      it('one 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('one');
      });
      it('one 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('one');
      });
      it('one 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('one');
      });
      it('one 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('one');
      });
      it('one 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('one');
      });
      it('one 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('one');
      });
      it('one 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('one');
      });
      it('one 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('one');
      });
      it('one 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('one');
      });
      it('many 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('many');
      });
      it('many 1e6', () => {
        expect(ruleList('1e6', runtime)).toEqual('many');
      });
      it('many 2e6', () => {
        expect(ruleList('2e6', runtime)).toEqual('many');
      });
      it('many 3e6', () => {
        expect(ruleList('3e6', runtime)).toEqual('many');
      });
      it('many 4e6', () => {
        expect(ruleList('4e6', runtime)).toEqual('many');
      });
      it('many 5e6', () => {
        expect(ruleList('5e6', runtime)).toEqual('many');
      });
      it('many 6e6', () => {
        expect(ruleList('6e6', runtime)).toEqual('many');
      });
      it('many 1.0000001e6', () => {
        expect(ruleList('1.0000001e6', runtime)).toEqual('many');
      });
      it('many 1.1e6', () => {
        expect(ruleList('1.1e6', runtime)).toEqual('many');
      });
      it('many 2.0000001e6', () => {
        expect(ruleList('2.0000001e6', runtime)).toEqual('many');
      });
      it('many 2.1e6', () => {
        expect(ruleList('2.1e6', runtime)).toEqual('many');
      });
      it('many 3.0000001e6', () => {
        expect(ruleList('3.0000001e6', runtime)).toEqual('many');
      });
      it('many 3.1e6', () => {
        expect(ruleList('3.1e6', runtime)).toEqual('many');
      });
      it('other 2', () => {
        expect(ruleList('2', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1e3', () => {
        expect(ruleList('1e3', runtime)).toEqual('other');
      });
      it('other 2e3', () => {
        expect(ruleList('2e3', runtime)).toEqual('other');
      });
      it('other 3e3', () => {
        expect(ruleList('3e3', runtime)).toEqual('other');
      });
      it('other 4e3', () => {
        expect(ruleList('4e3', runtime)).toEqual('other');
      });
      it('other 5e3', () => {
        expect(ruleList('5e3', runtime)).toEqual('other');
      });
      it('other 6e3', () => {
        expect(ruleList('6e3', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('other');
      });
      it('other 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('other');
      });
      it('other 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('other');
      });
      it('other 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 2.8', () => {
        expect(ruleList('2.8', runtime)).toEqual('other');
      });
      it('other 2.9', () => {
        expect(ruleList('2.9', runtime)).toEqual('other');
      });
      it('other 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('other');
      });
      it('other 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('other');
      });
      it('other 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('other');
      });
      it('other 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('other');
      });
      it('other 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('other');
      });
      it('other 3.5', () => {
        expect(ruleList('3.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
      it('other 1.0001e3', () => {
        expect(ruleList('1.0001e3', runtime)).toEqual('other');
      });
      it('other 1.1e3', () => {
        expect(ruleList('1.1e3', runtime)).toEqual('other');
      });
      it('other 2.0001e3', () => {
        expect(ruleList('2.0001e3', runtime)).toEqual('other');
      });
      it('other 2.1e3', () => {
        expect(ruleList('2.1e3', runtime)).toEqual('other');
      });
      it('other 3.0001e3', () => {
        expect(ruleList('3.0001e3', runtime)).toEqual('other');
      });
      it('other 3.1e3', () => {
        expect(ruleList('3.1e3', runtime)).toEqual('other');
      });
    });

    describe('gd', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((n == 1) || (n == 11)) ? 'one' : (((n == 2) || (n == 12)) ? 'two' : ((((Math.floor(n) === n) && (n >= 3) && (n <= 10)) || ((Math.floor(n) === n) && (n >= 13) && (n <= 19))) ? 'few' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 11', () => {
        expect(ruleList('11', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 11.00', () => {
        expect(ruleList('11.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 11.000', () => {
        expect(ruleList('11.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 12', () => {
        expect(ruleList('12', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 12.0', () => {
        expect(ruleList('12.0', runtime)).toEqual('two');
      });
      it('two 2.00', () => {
        expect(ruleList('2.00', runtime)).toEqual('two');
      });
      it('two 12.00', () => {
        expect(ruleList('12.00', runtime)).toEqual('two');
      });
      it('two 2.000', () => {
        expect(ruleList('2.000', runtime)).toEqual('two');
      });
      it('two 12.000', () => {
        expect(ruleList('12.000', runtime)).toEqual('two');
      });
      it('two 2.0000', () => {
        expect(ruleList('2.0000', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 7', () => {
        expect(ruleList('7', runtime)).toEqual('few');
      });
      it('few 8', () => {
        expect(ruleList('8', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 10', () => {
        expect(ruleList('10', runtime)).toEqual('few');
      });
      it('few 13', () => {
        expect(ruleList('13', runtime)).toEqual('few');
      });
      it('few 14', () => {
        expect(ruleList('14', runtime)).toEqual('few');
      });
      it('few 15', () => {
        expect(ruleList('15', runtime)).toEqual('few');
      });
      it('few 16', () => {
        expect(ruleList('16', runtime)).toEqual('few');
      });
      it('few 17', () => {
        expect(ruleList('17', runtime)).toEqual('few');
      });
      it('few 18', () => {
        expect(ruleList('18', runtime)).toEqual('few');
      });
      it('few 19', () => {
        expect(ruleList('19', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('few');
      });
      it('few 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('few');
      });
      it('few 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('few');
      });
      it('few 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('few');
      });
      it('few 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('few');
      });
      it('few 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('few');
      });
      it('few 13.0', () => {
        expect(ruleList('13.0', runtime)).toEqual('few');
      });
      it('few 14.0', () => {
        expect(ruleList('14.0', runtime)).toEqual('few');
      });
      it('few 15.0', () => {
        expect(ruleList('15.0', runtime)).toEqual('few');
      });
      it('few 16.0', () => {
        expect(ruleList('16.0', runtime)).toEqual('few');
      });
      it('few 17.0', () => {
        expect(ruleList('17.0', runtime)).toEqual('few');
      });
      it('few 18.0', () => {
        expect(ruleList('18.0', runtime)).toEqual('few');
      });
      it('few 19.0', () => {
        expect(ruleList('19.0', runtime)).toEqual('few');
      });
      it('few 3.00', () => {
        expect(ruleList('3.00', runtime)).toEqual('few');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 21', () => {
        expect(ruleList('21', runtime)).toEqual('other');
      });
      it('other 22', () => {
        expect(ruleList('22', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 25', () => {
        expect(ruleList('25', runtime)).toEqual('other');
      });
      it('other 26', () => {
        expect(ruleList('26', runtime)).toEqual('other');
      });
      it('other 27', () => {
        expect(ruleList('27', runtime)).toEqual('other');
      });
      it('other 28', () => {
        expect(ruleList('28', runtime)).toEqual('other');
      });
      it('other 29', () => {
        expect(ruleList('29', runtime)).toEqual('other');
      });
      it('other 30', () => {
        expect(ruleList('30', runtime)).toEqual('other');
      });
      it('other 31', () => {
        expect(ruleList('31', runtime)).toEqual('other');
      });
      it('other 32', () => {
        expect(ruleList('32', runtime)).toEqual('other');
      });
      it('other 33', () => {
        expect(ruleList('33', runtime)).toEqual('other');
      });
      it('other 34', () => {
        expect(ruleList('34', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('sl', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((v == 0 && i % 100 == 1) ? 'one' : ((v == 0 && i % 100 == 2) ? 'two' : (((v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 3) && (i % 100 <= 4))) || v != 0) ? 'few' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 201', () => {
        expect(ruleList('201', runtime)).toEqual('one');
      });
      it('one 301', () => {
        expect(ruleList('301', runtime)).toEqual('one');
      });
      it('one 401', () => {
        expect(ruleList('401', runtime)).toEqual('one');
      });
      it('one 501', () => {
        expect(ruleList('501', runtime)).toEqual('one');
      });
      it('one 601', () => {
        expect(ruleList('601', runtime)).toEqual('one');
      });
      it('one 701', () => {
        expect(ruleList('701', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 102', () => {
        expect(ruleList('102', runtime)).toEqual('two');
      });
      it('two 202', () => {
        expect(ruleList('202', runtime)).toEqual('two');
      });
      it('two 302', () => {
        expect(ruleList('302', runtime)).toEqual('two');
      });
      it('two 402', () => {
        expect(ruleList('402', runtime)).toEqual('two');
      });
      it('two 502', () => {
        expect(ruleList('502', runtime)).toEqual('two');
      });
      it('two 602', () => {
        expect(ruleList('602', runtime)).toEqual('two');
      });
      it('two 702', () => {
        expect(ruleList('702', runtime)).toEqual('two');
      });
      it('two 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 103', () => {
        expect(ruleList('103', runtime)).toEqual('few');
      });
      it('few 104', () => {
        expect(ruleList('104', runtime)).toEqual('few');
      });
      it('few 203', () => {
        expect(ruleList('203', runtime)).toEqual('few');
      });
      it('few 204', () => {
        expect(ruleList('204', runtime)).toEqual('few');
      });
      it('few 303', () => {
        expect(ruleList('303', runtime)).toEqual('few');
      });
      it('few 304', () => {
        expect(ruleList('304', runtime)).toEqual('few');
      });
      it('few 403', () => {
        expect(ruleList('403', runtime)).toEqual('few');
      });
      it('few 404', () => {
        expect(ruleList('404', runtime)).toEqual('few');
      });
      it('few 503', () => {
        expect(ruleList('503', runtime)).toEqual('few');
      });
      it('few 504', () => {
        expect(ruleList('504', runtime)).toEqual('few');
      });
      it('few 603', () => {
        expect(ruleList('603', runtime)).toEqual('few');
      });
      it('few 604', () => {
        expect(ruleList('604', runtime)).toEqual('few');
      });
      it('few 703', () => {
        expect(ruleList('703', runtime)).toEqual('few');
      });
      it('few 704', () => {
        expect(ruleList('704', runtime)).toEqual('few');
      });
      it('few 1003', () => {
        expect(ruleList('1003', runtime)).toEqual('few');
      });
      it('few 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('few');
      });
      it('few 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('few');
      });
      it('few 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('few');
      });
      it('few 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('few');
      });
      it('few 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('few');
      });
      it('few 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('few');
      });
      it('few 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('few');
      });
      it('few 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('few');
      });
      it('few 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('few');
      });
      it('few 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('few');
      });
      it('few 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('few');
      });
      it('few 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('few');
      });
      it('few 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('few');
      });
      it('few 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('few');
      });
      it('few 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('few');
      });
      it('few 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('few');
      });
      it('few 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('few');
      });
      it('few 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('few');
      });
      it('few 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('few');
      });
      it('few 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('few');
      });
      it('few 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('few');
      });
      it('few 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('few');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
    });

    describe('dsb/hsb', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((v == 0 && i % 100 == 1) || f % 100 == 1) ? 'one' : (((v == 0 && i % 100 == 2) || f % 100 == 2) ? 'two' : (((v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 3) && (i % 100 <= 4))) || ((Math.floor(f % 100) === f % 100) && (f % 100 >= 3) && (f % 100 <= 4))) ? 'few' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 201', () => {
        expect(ruleList('201', runtime)).toEqual('one');
      });
      it('one 301', () => {
        expect(ruleList('301', runtime)).toEqual('one');
      });
      it('one 401', () => {
        expect(ruleList('401', runtime)).toEqual('one');
      });
      it('one 501', () => {
        expect(ruleList('501', runtime)).toEqual('one');
      });
      it('one 601', () => {
        expect(ruleList('601', runtime)).toEqual('one');
      });
      it('one 701', () => {
        expect(ruleList('701', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('one');
      });
      it('one 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('one');
      });
      it('one 2.1', () => {
        expect(ruleList('2.1', runtime)).toEqual('one');
      });
      it('one 3.1', () => {
        expect(ruleList('3.1', runtime)).toEqual('one');
      });
      it('one 4.1', () => {
        expect(ruleList('4.1', runtime)).toEqual('one');
      });
      it('one 5.1', () => {
        expect(ruleList('5.1', runtime)).toEqual('one');
      });
      it('one 6.1', () => {
        expect(ruleList('6.1', runtime)).toEqual('one');
      });
      it('one 7.1', () => {
        expect(ruleList('7.1', runtime)).toEqual('one');
      });
      it('one 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('one');
      });
      it('one 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('one');
      });
      it('one 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 102', () => {
        expect(ruleList('102', runtime)).toEqual('two');
      });
      it('two 202', () => {
        expect(ruleList('202', runtime)).toEqual('two');
      });
      it('two 302', () => {
        expect(ruleList('302', runtime)).toEqual('two');
      });
      it('two 402', () => {
        expect(ruleList('402', runtime)).toEqual('two');
      });
      it('two 502', () => {
        expect(ruleList('502', runtime)).toEqual('two');
      });
      it('two 602', () => {
        expect(ruleList('602', runtime)).toEqual('two');
      });
      it('two 702', () => {
        expect(ruleList('702', runtime)).toEqual('two');
      });
      it('two 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('two');
      });
      it('two 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('two');
      });
      it('two 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('two');
      });
      it('two 2.2', () => {
        expect(ruleList('2.2', runtime)).toEqual('two');
      });
      it('two 3.2', () => {
        expect(ruleList('3.2', runtime)).toEqual('two');
      });
      it('two 4.2', () => {
        expect(ruleList('4.2', runtime)).toEqual('two');
      });
      it('two 5.2', () => {
        expect(ruleList('5.2', runtime)).toEqual('two');
      });
      it('two 6.2', () => {
        expect(ruleList('6.2', runtime)).toEqual('two');
      });
      it('two 7.2', () => {
        expect(ruleList('7.2', runtime)).toEqual('two');
      });
      it('two 10.2', () => {
        expect(ruleList('10.2', runtime)).toEqual('two');
      });
      it('two 100.2', () => {
        expect(ruleList('100.2', runtime)).toEqual('two');
      });
      it('two 1000.2', () => {
        expect(ruleList('1000.2', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 103', () => {
        expect(ruleList('103', runtime)).toEqual('few');
      });
      it('few 104', () => {
        expect(ruleList('104', runtime)).toEqual('few');
      });
      it('few 203', () => {
        expect(ruleList('203', runtime)).toEqual('few');
      });
      it('few 204', () => {
        expect(ruleList('204', runtime)).toEqual('few');
      });
      it('few 303', () => {
        expect(ruleList('303', runtime)).toEqual('few');
      });
      it('few 304', () => {
        expect(ruleList('304', runtime)).toEqual('few');
      });
      it('few 403', () => {
        expect(ruleList('403', runtime)).toEqual('few');
      });
      it('few 404', () => {
        expect(ruleList('404', runtime)).toEqual('few');
      });
      it('few 503', () => {
        expect(ruleList('503', runtime)).toEqual('few');
      });
      it('few 504', () => {
        expect(ruleList('504', runtime)).toEqual('few');
      });
      it('few 603', () => {
        expect(ruleList('603', runtime)).toEqual('few');
      });
      it('few 604', () => {
        expect(ruleList('604', runtime)).toEqual('few');
      });
      it('few 703', () => {
        expect(ruleList('703', runtime)).toEqual('few');
      });
      it('few 704', () => {
        expect(ruleList('704', runtime)).toEqual('few');
      });
      it('few 1003', () => {
        expect(ruleList('1003', runtime)).toEqual('few');
      });
      it('few 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('few');
      });
      it('few 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('few');
      });
      it('few 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('few');
      });
      it('few 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('few');
      });
      it('few 2.3', () => {
        expect(ruleList('2.3', runtime)).toEqual('few');
      });
      it('few 2.4', () => {
        expect(ruleList('2.4', runtime)).toEqual('few');
      });
      it('few 3.3', () => {
        expect(ruleList('3.3', runtime)).toEqual('few');
      });
      it('few 3.4', () => {
        expect(ruleList('3.4', runtime)).toEqual('few');
      });
      it('few 4.3', () => {
        expect(ruleList('4.3', runtime)).toEqual('few');
      });
      it('few 4.4', () => {
        expect(ruleList('4.4', runtime)).toEqual('few');
      });
      it('few 5.3', () => {
        expect(ruleList('5.3', runtime)).toEqual('few');
      });
      it('few 5.4', () => {
        expect(ruleList('5.4', runtime)).toEqual('few');
      });
      it('few 6.3', () => {
        expect(ruleList('6.3', runtime)).toEqual('few');
      });
      it('few 6.4', () => {
        expect(ruleList('6.4', runtime)).toEqual('few');
      });
      it('few 7.3', () => {
        expect(ruleList('7.3', runtime)).toEqual('few');
      });
      it('few 7.4', () => {
        expect(ruleList('7.4', runtime)).toEqual('few');
      });
      it('few 10.3', () => {
        expect(ruleList('10.3', runtime)).toEqual('few');
      });
      it('few 100.3', () => {
        expect(ruleList('100.3', runtime)).toEqual('few');
      });
      it('few 1000.3', () => {
        expect(ruleList('1000.3', runtime)).toEqual('few');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 1.8', () => {
        expect(ruleList('1.8', runtime)).toEqual('other');
      });
      it('other 1.9', () => {
        expect(ruleList('1.9', runtime)).toEqual('other');
      });
      it('other 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('other');
      });
      it('other 2.5', () => {
        expect(ruleList('2.5', runtime)).toEqual('other');
      });
      it('other 2.6', () => {
        expect(ruleList('2.6', runtime)).toEqual('other');
      });
      it('other 2.7', () => {
        expect(ruleList('2.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('he/iw', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 1 && v == 0) ? 'one' : ((i == 2 && v == 0) ? 'two' : (((v == 0 && !((Math.floor(n) === n) && (n >= 0) && (n <= 10))) && n % 10 == 0) ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('many 20', () => {
        expect(ruleList('20', runtime)).toEqual('many');
      });
      it('many 30', () => {
        expect(ruleList('30', runtime)).toEqual('many');
      });
      it('many 40', () => {
        expect(ruleList('40', runtime)).toEqual('many');
      });
      it('many 50', () => {
        expect(ruleList('50', runtime)).toEqual('many');
      });
      it('many 60', () => {
        expect(ruleList('60', runtime)).toEqual('many');
      });
      it('many 70', () => {
        expect(ruleList('70', runtime)).toEqual('many');
      });
      it('many 80', () => {
        expect(ruleList('80', runtime)).toEqual('many');
      });
      it('many 90', () => {
        expect(ruleList('90', runtime)).toEqual('many');
      });
      it('many 100', () => {
        expect(ruleList('100', runtime)).toEqual('many');
      });
      it('many 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('many');
      });
      it('many 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('many');
      });
      it('many 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('many');
      });
      it('many 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('many');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 101', () => {
        expect(ruleList('101', runtime)).toEqual('other');
      });
      it('other 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('cs/sk', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 1 && v == 0) ? 'one' : ((((Math.floor(i) === i) && (i >= 2) && (i <= 4)) && v == 0) ? 'few' : (v != 0 ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('many 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('many');
      });
      it('many 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('many');
      });
      it('many 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('many');
      });
      it('many 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('many');
      });
      it('many 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('many');
      });
      it('many 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('many');
      });
      it('many 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('many');
      });
      it('many 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('many');
      });
      it('many 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('many');
      });
      it('many 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('many');
      });
      it('many 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('many');
      });
      it('many 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('many');
      });
      it('many 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('many');
      });
      it('many 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('many');
      });
      it('many 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('many');
      });
      it('many 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('many');
      });
      it('many 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('many');
      });
      it('many 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('many');
      });
      it('many 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('many');
      });
      it('many 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('many');
      });
      it('many 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('many');
      });
      it('many 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('many');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
    });

    describe('pl', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((i == 1 && v == 0) ? 'one' : (((v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 2) && (i % 10 <= 4))) && !((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14))) ? 'few' : (((((v == 0 && i != 1) && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 0) && (i % 10 <= 1))) || (v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 5) && (i % 10 <= 9)))) || (v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14)))) ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 22', () => {
        expect(ruleList('22', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 24', () => {
        expect(ruleList('24', runtime)).toEqual('few');
      });
      it('few 32', () => {
        expect(ruleList('32', runtime)).toEqual('few');
      });
      it('few 33', () => {
        expect(ruleList('33', runtime)).toEqual('few');
      });
      it('few 34', () => {
        expect(ruleList('34', runtime)).toEqual('few');
      });
      it('few 42', () => {
        expect(ruleList('42', runtime)).toEqual('few');
      });
      it('few 43', () => {
        expect(ruleList('43', runtime)).toEqual('few');
      });
      it('few 44', () => {
        expect(ruleList('44', runtime)).toEqual('few');
      });
      it('few 52', () => {
        expect(ruleList('52', runtime)).toEqual('few');
      });
      it('few 53', () => {
        expect(ruleList('53', runtime)).toEqual('few');
      });
      it('few 54', () => {
        expect(ruleList('54', runtime)).toEqual('few');
      });
      it('few 62', () => {
        expect(ruleList('62', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('many 0', () => {
        expect(ruleList('0', runtime)).toEqual('many');
      });
      it('many 5', () => {
        expect(ruleList('5', runtime)).toEqual('many');
      });
      it('many 6', () => {
        expect(ruleList('6', runtime)).toEqual('many');
      });
      it('many 7', () => {
        expect(ruleList('7', runtime)).toEqual('many');
      });
      it('many 8', () => {
        expect(ruleList('8', runtime)).toEqual('many');
      });
      it('many 9', () => {
        expect(ruleList('9', runtime)).toEqual('many');
      });
      it('many 10', () => {
        expect(ruleList('10', runtime)).toEqual('many');
      });
      it('many 11', () => {
        expect(ruleList('11', runtime)).toEqual('many');
      });
      it('many 12', () => {
        expect(ruleList('12', runtime)).toEqual('many');
      });
      it('many 13', () => {
        expect(ruleList('13', runtime)).toEqual('many');
      });
      it('many 14', () => {
        expect(ruleList('14', runtime)).toEqual('many');
      });
      it('many 15', () => {
        expect(ruleList('15', runtime)).toEqual('many');
      });
      it('many 16', () => {
        expect(ruleList('16', runtime)).toEqual('many');
      });
      it('many 17', () => {
        expect(ruleList('17', runtime)).toEqual('many');
      });
      it('many 18', () => {
        expect(ruleList('18', runtime)).toEqual('many');
      });
      it('many 19', () => {
        expect(ruleList('19', runtime)).toEqual('many');
      });
      it('many 100', () => {
        expect(ruleList('100', runtime)).toEqual('many');
      });
      it('many 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('many');
      });
      it('many 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('many');
      });
      it('many 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('many');
      });
      it('many 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('many');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('be', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((n % 10 == 1 && n % 100 != 11) ? 'one' : ((((Math.floor(n % 10) === n % 10) && (n % 10 >= 2) && (n % 10 <= 4)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 12) && (n % 100 <= 14))) ? 'few' : (((n % 10 == 0 || ((Math.floor(n % 10) === n % 10) && (n % 10 >= 5) && (n % 10 <= 9))) || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 14))) ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 21.0', () => {
        expect(ruleList('21.0', runtime)).toEqual('one');
      });
      it('one 31.0', () => {
        expect(ruleList('31.0', runtime)).toEqual('one');
      });
      it('one 41.0', () => {
        expect(ruleList('41.0', runtime)).toEqual('one');
      });
      it('one 51.0', () => {
        expect(ruleList('51.0', runtime)).toEqual('one');
      });
      it('one 61.0', () => {
        expect(ruleList('61.0', runtime)).toEqual('one');
      });
      it('one 71.0', () => {
        expect(ruleList('71.0', runtime)).toEqual('one');
      });
      it('one 81.0', () => {
        expect(ruleList('81.0', runtime)).toEqual('one');
      });
      it('one 101.0', () => {
        expect(ruleList('101.0', runtime)).toEqual('one');
      });
      it('one 1001.0', () => {
        expect(ruleList('1001.0', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 22', () => {
        expect(ruleList('22', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 24', () => {
        expect(ruleList('24', runtime)).toEqual('few');
      });
      it('few 32', () => {
        expect(ruleList('32', runtime)).toEqual('few');
      });
      it('few 33', () => {
        expect(ruleList('33', runtime)).toEqual('few');
      });
      it('few 34', () => {
        expect(ruleList('34', runtime)).toEqual('few');
      });
      it('few 42', () => {
        expect(ruleList('42', runtime)).toEqual('few');
      });
      it('few 43', () => {
        expect(ruleList('43', runtime)).toEqual('few');
      });
      it('few 44', () => {
        expect(ruleList('44', runtime)).toEqual('few');
      });
      it('few 52', () => {
        expect(ruleList('52', runtime)).toEqual('few');
      });
      it('few 53', () => {
        expect(ruleList('53', runtime)).toEqual('few');
      });
      it('few 54', () => {
        expect(ruleList('54', runtime)).toEqual('few');
      });
      it('few 62', () => {
        expect(ruleList('62', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('few 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 22.0', () => {
        expect(ruleList('22.0', runtime)).toEqual('few');
      });
      it('few 23.0', () => {
        expect(ruleList('23.0', runtime)).toEqual('few');
      });
      it('few 24.0', () => {
        expect(ruleList('24.0', runtime)).toEqual('few');
      });
      it('few 32.0', () => {
        expect(ruleList('32.0', runtime)).toEqual('few');
      });
      it('few 33.0', () => {
        expect(ruleList('33.0', runtime)).toEqual('few');
      });
      it('few 102.0', () => {
        expect(ruleList('102.0', runtime)).toEqual('few');
      });
      it('few 1002.0', () => {
        expect(ruleList('1002.0', runtime)).toEqual('few');
      });
      it('many 0', () => {
        expect(ruleList('0', runtime)).toEqual('many');
      });
      it('many 5', () => {
        expect(ruleList('5', runtime)).toEqual('many');
      });
      it('many 6', () => {
        expect(ruleList('6', runtime)).toEqual('many');
      });
      it('many 7', () => {
        expect(ruleList('7', runtime)).toEqual('many');
      });
      it('many 8', () => {
        expect(ruleList('8', runtime)).toEqual('many');
      });
      it('many 9', () => {
        expect(ruleList('9', runtime)).toEqual('many');
      });
      it('many 10', () => {
        expect(ruleList('10', runtime)).toEqual('many');
      });
      it('many 11', () => {
        expect(ruleList('11', runtime)).toEqual('many');
      });
      it('many 12', () => {
        expect(ruleList('12', runtime)).toEqual('many');
      });
      it('many 13', () => {
        expect(ruleList('13', runtime)).toEqual('many');
      });
      it('many 14', () => {
        expect(ruleList('14', runtime)).toEqual('many');
      });
      it('many 15', () => {
        expect(ruleList('15', runtime)).toEqual('many');
      });
      it('many 16', () => {
        expect(ruleList('16', runtime)).toEqual('many');
      });
      it('many 17', () => {
        expect(ruleList('17', runtime)).toEqual('many');
      });
      it('many 18', () => {
        expect(ruleList('18', runtime)).toEqual('many');
      });
      it('many 19', () => {
        expect(ruleList('19', runtime)).toEqual('many');
      });
      it('many 100', () => {
        expect(ruleList('100', runtime)).toEqual('many');
      });
      it('many 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('many');
      });
      it('many 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('many');
      });
      it('many 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('many');
      });
      it('many 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('many');
      });
      it('many 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('many');
      });
      it('many 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('many');
      });
      it('many 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('many');
      });
      it('many 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('many');
      });
      it('many 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('many');
      });
      it('many 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('many');
      });
      it('many 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('many');
      });
      it('many 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('many');
      });
      it('many 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('many');
      });
      it('many 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('many');
      });
      it('many 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('many');
      });
      it('many 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('many');
      });
      it('many 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('many');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('other');
      });
      it('other 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('other');
      });
      it('other 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('other');
      });
    });

    describe('lt', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((n % 10 == 1 && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19))) ? 'one' : ((((Math.floor(n % 10) === n % 10) && (n % 10 >= 2) && (n % 10 <= 9)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19))) ? 'few' : (f != 0 ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 21.0', () => {
        expect(ruleList('21.0', runtime)).toEqual('one');
      });
      it('one 31.0', () => {
        expect(ruleList('31.0', runtime)).toEqual('one');
      });
      it('one 41.0', () => {
        expect(ruleList('41.0', runtime)).toEqual('one');
      });
      it('one 51.0', () => {
        expect(ruleList('51.0', runtime)).toEqual('one');
      });
      it('one 61.0', () => {
        expect(ruleList('61.0', runtime)).toEqual('one');
      });
      it('one 71.0', () => {
        expect(ruleList('71.0', runtime)).toEqual('one');
      });
      it('one 81.0', () => {
        expect(ruleList('81.0', runtime)).toEqual('one');
      });
      it('one 101.0', () => {
        expect(ruleList('101.0', runtime)).toEqual('one');
      });
      it('one 1001.0', () => {
        expect(ruleList('1001.0', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 7', () => {
        expect(ruleList('7', runtime)).toEqual('few');
      });
      it('few 8', () => {
        expect(ruleList('8', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 22', () => {
        expect(ruleList('22', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 24', () => {
        expect(ruleList('24', runtime)).toEqual('few');
      });
      it('few 25', () => {
        expect(ruleList('25', runtime)).toEqual('few');
      });
      it('few 26', () => {
        expect(ruleList('26', runtime)).toEqual('few');
      });
      it('few 27', () => {
        expect(ruleList('27', runtime)).toEqual('few');
      });
      it('few 28', () => {
        expect(ruleList('28', runtime)).toEqual('few');
      });
      it('few 29', () => {
        expect(ruleList('29', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('few 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('few');
      });
      it('few 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('few');
      });
      it('few 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('few');
      });
      it('few 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('few');
      });
      it('few 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('few');
      });
      it('few 22.0', () => {
        expect(ruleList('22.0', runtime)).toEqual('few');
      });
      it('few 102.0', () => {
        expect(ruleList('102.0', runtime)).toEqual('few');
      });
      it('few 1002.0', () => {
        expect(ruleList('1002.0', runtime)).toEqual('few');
      });
      it('many 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('many');
      });
      it('many 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('many');
      });
      it('many 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('many');
      });
      it('many 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('many');
      });
      it('many 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('many');
      });
      it('many 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('many');
      });
      it('many 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('many');
      });
      it('many 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('many');
      });
      it('many 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('many');
      });
      it('many 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('many');
      });
      it('many 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('many');
      });
      it('many 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('many');
      });
      it('many 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('many');
      });
      it('many 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('many');
      });
      it('many 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('many');
      });
      it('many 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('many');
      });
      it('many 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('many');
      });
      it('many 100.1', () => {
        expect(ruleList('100.1', runtime)).toEqual('many');
      });
      it('many 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('many');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 30', () => {
        expect(ruleList('30', runtime)).toEqual('other');
      });
      it('other 40', () => {
        expect(ruleList('40', runtime)).toEqual('other');
      });
      it('other 50', () => {
        expect(ruleList('50', runtime)).toEqual('other');
      });
      it('other 60', () => {
        expect(ruleList('60', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('other');
      });
      it('other 12.0', () => {
        expect(ruleList('12.0', runtime)).toEqual('other');
      });
      it('other 13.0', () => {
        expect(ruleList('13.0', runtime)).toEqual('other');
      });
      it('other 14.0', () => {
        expect(ruleList('14.0', runtime)).toEqual('other');
      });
      it('other 15.0', () => {
        expect(ruleList('15.0', runtime)).toEqual('other');
      });
      it('other 16.0', () => {
        expect(ruleList('16.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('mt', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 1 ? 'one' : ((n == 0 || ((Math.floor(n % 100) === n % 100) && (n % 100 >= 2) && (n % 100 <= 10))) ? 'few' : (((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 19)) ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('few 0', () => {
        expect(ruleList('0', runtime)).toEqual('few');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 7', () => {
        expect(ruleList('7', runtime)).toEqual('few');
      });
      it('few 8', () => {
        expect(ruleList('8', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 10', () => {
        expect(ruleList('10', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 103', () => {
        expect(ruleList('103', runtime)).toEqual('few');
      });
      it('few 104', () => {
        expect(ruleList('104', runtime)).toEqual('few');
      });
      it('few 105', () => {
        expect(ruleList('105', runtime)).toEqual('few');
      });
      it('few 106', () => {
        expect(ruleList('106', runtime)).toEqual('few');
      });
      it('few 107', () => {
        expect(ruleList('107', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('few 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('few');
      });
      it('few 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('few');
      });
      it('few 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('few');
      });
      it('few 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('few');
      });
      it('few 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('few');
      });
      it('few 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('few');
      });
      it('few 102.0', () => {
        expect(ruleList('102.0', runtime)).toEqual('few');
      });
      it('few 1002.0', () => {
        expect(ruleList('1002.0', runtime)).toEqual('few');
      });
      it('many 11', () => {
        expect(ruleList('11', runtime)).toEqual('many');
      });
      it('many 12', () => {
        expect(ruleList('12', runtime)).toEqual('many');
      });
      it('many 13', () => {
        expect(ruleList('13', runtime)).toEqual('many');
      });
      it('many 14', () => {
        expect(ruleList('14', runtime)).toEqual('many');
      });
      it('many 15', () => {
        expect(ruleList('15', runtime)).toEqual('many');
      });
      it('many 16', () => {
        expect(ruleList('16', runtime)).toEqual('many');
      });
      it('many 17', () => {
        expect(ruleList('17', runtime)).toEqual('many');
      });
      it('many 18', () => {
        expect(ruleList('18', runtime)).toEqual('many');
      });
      it('many 19', () => {
        expect(ruleList('19', runtime)).toEqual('many');
      });
      it('many 111', () => {
        expect(ruleList('111', runtime)).toEqual('many');
      });
      it('many 112', () => {
        expect(ruleList('112', runtime)).toEqual('many');
      });
      it('many 113', () => {
        expect(ruleList('113', runtime)).toEqual('many');
      });
      it('many 114', () => {
        expect(ruleList('114', runtime)).toEqual('many');
      });
      it('many 115', () => {
        expect(ruleList('115', runtime)).toEqual('many');
      });
      it('many 116', () => {
        expect(ruleList('116', runtime)).toEqual('many');
      });
      it('many 117', () => {
        expect(ruleList('117', runtime)).toEqual('many');
      });
      it('many 1011', () => {
        expect(ruleList('1011', runtime)).toEqual('many');
      });
      it('many 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('many');
      });
      it('many 12.0', () => {
        expect(ruleList('12.0', runtime)).toEqual('many');
      });
      it('many 13.0', () => {
        expect(ruleList('13.0', runtime)).toEqual('many');
      });
      it('many 14.0', () => {
        expect(ruleList('14.0', runtime)).toEqual('many');
      });
      it('many 15.0', () => {
        expect(ruleList('15.0', runtime)).toEqual('many');
      });
      it('many 16.0', () => {
        expect(ruleList('16.0', runtime)).toEqual('many');
      });
      it('many 17.0', () => {
        expect(ruleList('17.0', runtime)).toEqual('many');
      });
      it('many 18.0', () => {
        expect(ruleList('18.0', runtime)).toEqual('many');
      });
      it('many 111.0', () => {
        expect(ruleList('111.0', runtime)).toEqual('many');
      });
      it('many 1011.0', () => {
        expect(ruleList('1011.0', runtime)).toEqual('many');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 21', () => {
        expect(ruleList('21', runtime)).toEqual('other');
      });
      it('other 22', () => {
        expect(ruleList('22', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 25', () => {
        expect(ruleList('25', runtime)).toEqual('other');
      });
      it('other 26', () => {
        expect(ruleList('26', runtime)).toEqual('other');
      });
      it('other 27', () => {
        expect(ruleList('27', runtime)).toEqual('other');
      });
      it('other 28', () => {
        expect(ruleList('28', runtime)).toEqual('other');
      });
      it('other 29', () => {
        expect(ruleList('29', runtime)).toEqual('other');
      });
      it('other 30', () => {
        expect(ruleList('30', runtime)).toEqual('other');
      });
      it('other 31', () => {
        expect(ruleList('31', runtime)).toEqual('other');
      });
      it('other 32', () => {
        expect(ruleList('32', runtime)).toEqual('other');
      });
      it('other 33', () => {
        expect(ruleList('33', runtime)).toEqual('other');
      });
      it('other 34', () => {
        expect(ruleList('34', runtime)).toEqual('other');
      });
      it('other 35', () => {
        expect(ruleList('35', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ru/uk', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (((v == 0 && i % 10 == 1) && i % 100 != 11) ? 'one' : (((v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 2) && (i % 10 <= 4))) && !((Math.floor(i % 100) === i % 100) && (i % 100 >= 12) && (i % 100 <= 14))) ? 'few' : ((((v == 0 && i % 10 == 0) || (v == 0 && ((Math.floor(i % 10) === i % 10) && (i % 10 >= 5) && (i % 10 <= 9)))) || (v == 0 && ((Math.floor(i % 100) === i % 100) && (i % 100 >= 11) && (i % 100 <= 14)))) ? 'many' : 'other'))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('few 2', () => {
        expect(ruleList('2', runtime)).toEqual('few');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 22', () => {
        expect(ruleList('22', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 24', () => {
        expect(ruleList('24', runtime)).toEqual('few');
      });
      it('few 32', () => {
        expect(ruleList('32', runtime)).toEqual('few');
      });
      it('few 33', () => {
        expect(ruleList('33', runtime)).toEqual('few');
      });
      it('few 34', () => {
        expect(ruleList('34', runtime)).toEqual('few');
      });
      it('few 42', () => {
        expect(ruleList('42', runtime)).toEqual('few');
      });
      it('few 43', () => {
        expect(ruleList('43', runtime)).toEqual('few');
      });
      it('few 44', () => {
        expect(ruleList('44', runtime)).toEqual('few');
      });
      it('few 52', () => {
        expect(ruleList('52', runtime)).toEqual('few');
      });
      it('few 53', () => {
        expect(ruleList('53', runtime)).toEqual('few');
      });
      it('few 54', () => {
        expect(ruleList('54', runtime)).toEqual('few');
      });
      it('few 62', () => {
        expect(ruleList('62', runtime)).toEqual('few');
      });
      it('few 102', () => {
        expect(ruleList('102', runtime)).toEqual('few');
      });
      it('few 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('few');
      });
      it('many 0', () => {
        expect(ruleList('0', runtime)).toEqual('many');
      });
      it('many 5', () => {
        expect(ruleList('5', runtime)).toEqual('many');
      });
      it('many 6', () => {
        expect(ruleList('6', runtime)).toEqual('many');
      });
      it('many 7', () => {
        expect(ruleList('7', runtime)).toEqual('many');
      });
      it('many 8', () => {
        expect(ruleList('8', runtime)).toEqual('many');
      });
      it('many 9', () => {
        expect(ruleList('9', runtime)).toEqual('many');
      });
      it('many 10', () => {
        expect(ruleList('10', runtime)).toEqual('many');
      });
      it('many 11', () => {
        expect(ruleList('11', runtime)).toEqual('many');
      });
      it('many 12', () => {
        expect(ruleList('12', runtime)).toEqual('many');
      });
      it('many 13', () => {
        expect(ruleList('13', runtime)).toEqual('many');
      });
      it('many 14', () => {
        expect(ruleList('14', runtime)).toEqual('many');
      });
      it('many 15', () => {
        expect(ruleList('15', runtime)).toEqual('many');
      });
      it('many 16', () => {
        expect(ruleList('16', runtime)).toEqual('many');
      });
      it('many 17', () => {
        expect(ruleList('17', runtime)).toEqual('many');
      });
      it('many 18', () => {
        expect(ruleList('18', runtime)).toEqual('many');
      });
      it('many 19', () => {
        expect(ruleList('19', runtime)).toEqual('many');
      });
      it('many 100', () => {
        expect(ruleList('100', runtime)).toEqual('many');
      });
      it('many 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('many');
      });
      it('many 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('many');
      });
      it('many 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('many');
      });
      it('many 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('many');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('br', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((n % 10 == 1 && ((n % 100 != 11) && (n % 100 != 71) && (n % 100 != 91))) ? 'one' : ((n % 10 == 2 && ((n % 100 != 12) && (n % 100 != 72) && (n % 100 != 92))) ? 'two' : (((((Math.floor(n % 10) === n % 10) && (n % 10 >= 3) && (n % 10 <= 4)) || (n % 10 == 9)) && (!((Math.floor(n % 100) === n % 100) && (n % 100 >= 10) && (n % 100 <= 19)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 70) && (n % 100 <= 79)) && !((Math.floor(n % 100) === n % 100) && (n % 100 >= 90) && (n % 100 <= 99)))) ? 'few' : ((n != 0 && n % 1000000 == 0) ? 'many' : 'other')))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 81', () => {
        expect(ruleList('81', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 21.0', () => {
        expect(ruleList('21.0', runtime)).toEqual('one');
      });
      it('one 31.0', () => {
        expect(ruleList('31.0', runtime)).toEqual('one');
      });
      it('one 41.0', () => {
        expect(ruleList('41.0', runtime)).toEqual('one');
      });
      it('one 51.0', () => {
        expect(ruleList('51.0', runtime)).toEqual('one');
      });
      it('one 61.0', () => {
        expect(ruleList('61.0', runtime)).toEqual('one');
      });
      it('one 81.0', () => {
        expect(ruleList('81.0', runtime)).toEqual('one');
      });
      it('one 101.0', () => {
        expect(ruleList('101.0', runtime)).toEqual('one');
      });
      it('one 1001.0', () => {
        expect(ruleList('1001.0', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 22', () => {
        expect(ruleList('22', runtime)).toEqual('two');
      });
      it('two 32', () => {
        expect(ruleList('32', runtime)).toEqual('two');
      });
      it('two 42', () => {
        expect(ruleList('42', runtime)).toEqual('two');
      });
      it('two 52', () => {
        expect(ruleList('52', runtime)).toEqual('two');
      });
      it('two 62', () => {
        expect(ruleList('62', runtime)).toEqual('two');
      });
      it('two 82', () => {
        expect(ruleList('82', runtime)).toEqual('two');
      });
      it('two 102', () => {
        expect(ruleList('102', runtime)).toEqual('two');
      });
      it('two 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 22.0', () => {
        expect(ruleList('22.0', runtime)).toEqual('two');
      });
      it('two 32.0', () => {
        expect(ruleList('32.0', runtime)).toEqual('two');
      });
      it('two 42.0', () => {
        expect(ruleList('42.0', runtime)).toEqual('two');
      });
      it('two 52.0', () => {
        expect(ruleList('52.0', runtime)).toEqual('two');
      });
      it('two 62.0', () => {
        expect(ruleList('62.0', runtime)).toEqual('two');
      });
      it('two 82.0', () => {
        expect(ruleList('82.0', runtime)).toEqual('two');
      });
      it('two 102.0', () => {
        expect(ruleList('102.0', runtime)).toEqual('two');
      });
      it('two 1002.0', () => {
        expect(ruleList('1002.0', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 24', () => {
        expect(ruleList('24', runtime)).toEqual('few');
      });
      it('few 29', () => {
        expect(ruleList('29', runtime)).toEqual('few');
      });
      it('few 33', () => {
        expect(ruleList('33', runtime)).toEqual('few');
      });
      it('few 34', () => {
        expect(ruleList('34', runtime)).toEqual('few');
      });
      it('few 39', () => {
        expect(ruleList('39', runtime)).toEqual('few');
      });
      it('few 43', () => {
        expect(ruleList('43', runtime)).toEqual('few');
      });
      it('few 44', () => {
        expect(ruleList('44', runtime)).toEqual('few');
      });
      it('few 49', () => {
        expect(ruleList('49', runtime)).toEqual('few');
      });
      it('few 103', () => {
        expect(ruleList('103', runtime)).toEqual('few');
      });
      it('few 1003', () => {
        expect(ruleList('1003', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('few');
      });
      it('few 23.0', () => {
        expect(ruleList('23.0', runtime)).toEqual('few');
      });
      it('few 24.0', () => {
        expect(ruleList('24.0', runtime)).toEqual('few');
      });
      it('few 29.0', () => {
        expect(ruleList('29.0', runtime)).toEqual('few');
      });
      it('few 33.0', () => {
        expect(ruleList('33.0', runtime)).toEqual('few');
      });
      it('few 34.0', () => {
        expect(ruleList('34.0', runtime)).toEqual('few');
      });
      it('few 103.0', () => {
        expect(ruleList('103.0', runtime)).toEqual('few');
      });
      it('few 1003.0', () => {
        expect(ruleList('1003.0', runtime)).toEqual('few');
      });
      it('many 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('many');
      });
      it('many 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('many');
      });
      it('many 1000000.00', () => {
        expect(ruleList('1000000.00', runtime)).toEqual('many');
      });
      it('many 1000000.000', () => {
        expect(ruleList('1000000.000', runtime)).toEqual('many');
      });
      it('many 1000000.0000', () => {
        expect(ruleList('1000000.0000', runtime)).toEqual('many');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
    });

    describe('ga', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 1 ? 'one' : (n == 2 ? 'two' : (((Math.floor(n) === n) && (n >= 3) && (n <= 6)) ? 'few' : (((Math.floor(n) === n) && (n >= 7) && (n <= 10)) ? 'many' : 'other')))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 2.00', () => {
        expect(ruleList('2.00', runtime)).toEqual('two');
      });
      it('two 2.000', () => {
        expect(ruleList('2.000', runtime)).toEqual('two');
      });
      it('two 2.0000', () => {
        expect(ruleList('2.0000', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('few');
      });
      it('few 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('few');
      });
      it('few 3.00', () => {
        expect(ruleList('3.00', runtime)).toEqual('few');
      });
      it('few 4.00', () => {
        expect(ruleList('4.00', runtime)).toEqual('few');
      });
      it('few 5.00', () => {
        expect(ruleList('5.00', runtime)).toEqual('few');
      });
      it('few 6.00', () => {
        expect(ruleList('6.00', runtime)).toEqual('few');
      });
      it('few 3.000', () => {
        expect(ruleList('3.000', runtime)).toEqual('few');
      });
      it('few 4.000', () => {
        expect(ruleList('4.000', runtime)).toEqual('few');
      });
      it('few 5.000', () => {
        expect(ruleList('5.000', runtime)).toEqual('few');
      });
      it('few 6.000', () => {
        expect(ruleList('6.000', runtime)).toEqual('few');
      });
      it('few 3.0000', () => {
        expect(ruleList('3.0000', runtime)).toEqual('few');
      });
      it('few 4.0000', () => {
        expect(ruleList('4.0000', runtime)).toEqual('few');
      });
      it('few 5.0000', () => {
        expect(ruleList('5.0000', runtime)).toEqual('few');
      });
      it('few 6.0000', () => {
        expect(ruleList('6.0000', runtime)).toEqual('few');
      });
      it('many 7', () => {
        expect(ruleList('7', runtime)).toEqual('many');
      });
      it('many 8', () => {
        expect(ruleList('8', runtime)).toEqual('many');
      });
      it('many 9', () => {
        expect(ruleList('9', runtime)).toEqual('many');
      });
      it('many 10', () => {
        expect(ruleList('10', runtime)).toEqual('many');
      });
      it('many 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('many');
      });
      it('many 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('many');
      });
      it('many 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('many');
      });
      it('many 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('many');
      });
      it('many 7.00', () => {
        expect(ruleList('7.00', runtime)).toEqual('many');
      });
      it('many 8.00', () => {
        expect(ruleList('8.00', runtime)).toEqual('many');
      });
      it('many 9.00', () => {
        expect(ruleList('9.00', runtime)).toEqual('many');
      });
      it('many 10.00', () => {
        expect(ruleList('10.00', runtime)).toEqual('many');
      });
      it('many 7.000', () => {
        expect(ruleList('7.000', runtime)).toEqual('many');
      });
      it('many 8.000', () => {
        expect(ruleList('8.000', runtime)).toEqual('many');
      });
      it('many 9.000', () => {
        expect(ruleList('9.000', runtime)).toEqual('many');
      });
      it('many 10.000', () => {
        expect(ruleList('10.000', runtime)).toEqual('many');
      });
      it('many 7.0000', () => {
        expect(ruleList('7.0000', runtime)).toEqual('many');
      });
      it('many 8.0000', () => {
        expect(ruleList('8.0000', runtime)).toEqual('many');
      });
      it('many 9.0000', () => {
        expect(ruleList('9.0000', runtime)).toEqual('many');
      });
      it('many 10.0000', () => {
        expect(ruleList('10.0000', runtime)).toEqual('many');
      });
      it('other 0', () => {
        expect(ruleList('0', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 21', () => {
        expect(ruleList('21', runtime)).toEqual('other');
      });
      it('other 22', () => {
        expect(ruleList('22', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 24', () => {
        expect(ruleList('24', runtime)).toEqual('other');
      });
      it('other 25', () => {
        expect(ruleList('25', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('gv', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return ((v == 0 && i % 10 == 1) ? 'one' : ((v == 0 && i % 10 == 2) ? 'two' : ((v == 0 && ((i % 100 == 0) || (i % 100 == 20) || (i % 100 == 40) || (i % 100 == 60) || (i % 100 == 80))) ? 'few' : (v != 0 ? 'many' : 'other')))); });

      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 11', () => {
        expect(ruleList('11', runtime)).toEqual('one');
      });
      it('one 21', () => {
        expect(ruleList('21', runtime)).toEqual('one');
      });
      it('one 31', () => {
        expect(ruleList('31', runtime)).toEqual('one');
      });
      it('one 41', () => {
        expect(ruleList('41', runtime)).toEqual('one');
      });
      it('one 51', () => {
        expect(ruleList('51', runtime)).toEqual('one');
      });
      it('one 61', () => {
        expect(ruleList('61', runtime)).toEqual('one');
      });
      it('one 71', () => {
        expect(ruleList('71', runtime)).toEqual('one');
      });
      it('one 101', () => {
        expect(ruleList('101', runtime)).toEqual('one');
      });
      it('one 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 12', () => {
        expect(ruleList('12', runtime)).toEqual('two');
      });
      it('two 22', () => {
        expect(ruleList('22', runtime)).toEqual('two');
      });
      it('two 32', () => {
        expect(ruleList('32', runtime)).toEqual('two');
      });
      it('two 42', () => {
        expect(ruleList('42', runtime)).toEqual('two');
      });
      it('two 52', () => {
        expect(ruleList('52', runtime)).toEqual('two');
      });
      it('two 62', () => {
        expect(ruleList('62', runtime)).toEqual('two');
      });
      it('two 72', () => {
        expect(ruleList('72', runtime)).toEqual('two');
      });
      it('two 102', () => {
        expect(ruleList('102', runtime)).toEqual('two');
      });
      it('two 1002', () => {
        expect(ruleList('1002', runtime)).toEqual('two');
      });
      it('few 0', () => {
        expect(ruleList('0', runtime)).toEqual('few');
      });
      it('few 20', () => {
        expect(ruleList('20', runtime)).toEqual('few');
      });
      it('few 40', () => {
        expect(ruleList('40', runtime)).toEqual('few');
      });
      it('few 60', () => {
        expect(ruleList('60', runtime)).toEqual('few');
      });
      it('few 80', () => {
        expect(ruleList('80', runtime)).toEqual('few');
      });
      it('few 100', () => {
        expect(ruleList('100', runtime)).toEqual('few');
      });
      it('few 120', () => {
        expect(ruleList('120', runtime)).toEqual('few');
      });
      it('few 140', () => {
        expect(ruleList('140', runtime)).toEqual('few');
      });
      it('few 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('few');
      });
      it('few 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('few');
      });
      it('few 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('few');
      });
      it('few 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('few');
      });
      it('many 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('many');
      });
      it('many 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('many');
      });
      it('many 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('many');
      });
      it('many 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('many');
      });
      it('many 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('many');
      });
      it('many 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('many');
      });
      it('many 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('many');
      });
      it('many 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('many');
      });
      it('many 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('many');
      });
      it('many 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('many');
      });
      it('many 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('many');
      });
      it('many 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('many');
      });
      it('many 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('many');
      });
      it('many 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('many');
      });
      it('many 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('many');
      });
      it('many 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('many');
      });
      it('many 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('many');
      });
      it('many 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('many');
      });
      it('many 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('many');
      });
      it('many 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('many');
      });
      it('many 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('many');
      });
      it('many 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('many');
      });
      it('other 3', () => {
        expect(ruleList('3', runtime)).toEqual('other');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 23', () => {
        expect(ruleList('23', runtime)).toEqual('other');
      });
      it('other 103', () => {
        expect(ruleList('103', runtime)).toEqual('other');
      });
      it('other 1003', () => {
        expect(ruleList('1003', runtime)).toEqual('other');
      });
    });

    describe('kw', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 0 ? 'zero' : (n == 1 ? 'one' : (((((n % 100 == 2) || (n % 100 == 22) || (n % 100 == 42) || (n % 100 == 62) || (n % 100 == 82)) || (n % 1000 == 0 && (((Math.floor(n % 100000) === n % 100000) && (n % 100000 >= 1000) && (n % 100000 <= 20000)) || (n % 100000 == 40000) || (n % 100000 == 60000) || (n % 100000 == 80000)))) || (n != 0 && n % 1000000 == 100000)) ? 'two' : (((n % 100 == 3) || (n % 100 == 23) || (n % 100 == 43) || (n % 100 == 63) || (n % 100 == 83)) ? 'few' : ((n != 1 && ((n % 100 == 1) || (n % 100 == 21) || (n % 100 == 41) || (n % 100 == 61) || (n % 100 == 81))) ? 'many' : 'other'))))); });

      it('zero 0', () => {
        expect(ruleList('0', runtime)).toEqual('zero');
      });
      it('zero 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('zero');
      });
      it('zero 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('zero');
      });
      it('zero 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('zero');
      });
      it('zero 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('zero');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 22', () => {
        expect(ruleList('22', runtime)).toEqual('two');
      });
      it('two 42', () => {
        expect(ruleList('42', runtime)).toEqual('two');
      });
      it('two 62', () => {
        expect(ruleList('62', runtime)).toEqual('two');
      });
      it('two 82', () => {
        expect(ruleList('82', runtime)).toEqual('two');
      });
      it('two 102', () => {
        expect(ruleList('102', runtime)).toEqual('two');
      });
      it('two 122', () => {
        expect(ruleList('122', runtime)).toEqual('two');
      });
      it('two 142', () => {
        expect(ruleList('142', runtime)).toEqual('two');
      });
      it('two 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('two');
      });
      it('two 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('two');
      });
      it('two 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 22.0', () => {
        expect(ruleList('22.0', runtime)).toEqual('two');
      });
      it('two 42.0', () => {
        expect(ruleList('42.0', runtime)).toEqual('two');
      });
      it('two 62.0', () => {
        expect(ruleList('62.0', runtime)).toEqual('two');
      });
      it('two 82.0', () => {
        expect(ruleList('82.0', runtime)).toEqual('two');
      });
      it('two 102.0', () => {
        expect(ruleList('102.0', runtime)).toEqual('two');
      });
      it('two 122.0', () => {
        expect(ruleList('122.0', runtime)).toEqual('two');
      });
      it('two 142.0', () => {
        expect(ruleList('142.0', runtime)).toEqual('two');
      });
      it('two 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('two');
      });
      it('two 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('two');
      });
      it('two 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 23', () => {
        expect(ruleList('23', runtime)).toEqual('few');
      });
      it('few 43', () => {
        expect(ruleList('43', runtime)).toEqual('few');
      });
      it('few 63', () => {
        expect(ruleList('63', runtime)).toEqual('few');
      });
      it('few 83', () => {
        expect(ruleList('83', runtime)).toEqual('few');
      });
      it('few 103', () => {
        expect(ruleList('103', runtime)).toEqual('few');
      });
      it('few 123', () => {
        expect(ruleList('123', runtime)).toEqual('few');
      });
      it('few 143', () => {
        expect(ruleList('143', runtime)).toEqual('few');
      });
      it('few 1003', () => {
        expect(ruleList('1003', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 23.0', () => {
        expect(ruleList('23.0', runtime)).toEqual('few');
      });
      it('few 43.0', () => {
        expect(ruleList('43.0', runtime)).toEqual('few');
      });
      it('few 63.0', () => {
        expect(ruleList('63.0', runtime)).toEqual('few');
      });
      it('few 83.0', () => {
        expect(ruleList('83.0', runtime)).toEqual('few');
      });
      it('few 103.0', () => {
        expect(ruleList('103.0', runtime)).toEqual('few');
      });
      it('few 123.0', () => {
        expect(ruleList('123.0', runtime)).toEqual('few');
      });
      it('few 143.0', () => {
        expect(ruleList('143.0', runtime)).toEqual('few');
      });
      it('few 1003.0', () => {
        expect(ruleList('1003.0', runtime)).toEqual('few');
      });
      it('many 21', () => {
        expect(ruleList('21', runtime)).toEqual('many');
      });
      it('many 41', () => {
        expect(ruleList('41', runtime)).toEqual('many');
      });
      it('many 61', () => {
        expect(ruleList('61', runtime)).toEqual('many');
      });
      it('many 81', () => {
        expect(ruleList('81', runtime)).toEqual('many');
      });
      it('many 101', () => {
        expect(ruleList('101', runtime)).toEqual('many');
      });
      it('many 121', () => {
        expect(ruleList('121', runtime)).toEqual('many');
      });
      it('many 141', () => {
        expect(ruleList('141', runtime)).toEqual('many');
      });
      it('many 161', () => {
        expect(ruleList('161', runtime)).toEqual('many');
      });
      it('many 1001', () => {
        expect(ruleList('1001', runtime)).toEqual('many');
      });
      it('many 21.0', () => {
        expect(ruleList('21.0', runtime)).toEqual('many');
      });
      it('many 41.0', () => {
        expect(ruleList('41.0', runtime)).toEqual('many');
      });
      it('many 61.0', () => {
        expect(ruleList('61.0', runtime)).toEqual('many');
      });
      it('many 81.0', () => {
        expect(ruleList('81.0', runtime)).toEqual('many');
      });
      it('many 101.0', () => {
        expect(ruleList('101.0', runtime)).toEqual('many');
      });
      it('many 121.0', () => {
        expect(ruleList('121.0', runtime)).toEqual('many');
      });
      it('many 141.0', () => {
        expect(ruleList('141.0', runtime)).toEqual('many');
      });
      it('many 161.0', () => {
        expect(ruleList('161.0', runtime)).toEqual('many');
      });
      it('many 1001.0', () => {
        expect(ruleList('1001.0', runtime)).toEqual('many');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 6', () => {
        expect(ruleList('6', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1004', () => {
        expect(ruleList('1004', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.1', () => {
        expect(ruleList('1000.1', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('ar/ars', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 0 ? 'zero' : (n == 1 ? 'one' : (n == 2 ? 'two' : (((Math.floor(n % 100) === n % 100) && (n % 100 >= 3) && (n % 100 <= 10)) ? 'few' : (((Math.floor(n % 100) === n % 100) && (n % 100 >= 11) && (n % 100 <= 99)) ? 'many' : 'other'))))); });

      it('zero 0', () => {
        expect(ruleList('0', runtime)).toEqual('zero');
      });
      it('zero 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('zero');
      });
      it('zero 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('zero');
      });
      it('zero 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('zero');
      });
      it('zero 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('zero');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 2.00', () => {
        expect(ruleList('2.00', runtime)).toEqual('two');
      });
      it('two 2.000', () => {
        expect(ruleList('2.000', runtime)).toEqual('two');
      });
      it('two 2.0000', () => {
        expect(ruleList('2.0000', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 4', () => {
        expect(ruleList('4', runtime)).toEqual('few');
      });
      it('few 5', () => {
        expect(ruleList('5', runtime)).toEqual('few');
      });
      it('few 6', () => {
        expect(ruleList('6', runtime)).toEqual('few');
      });
      it('few 7', () => {
        expect(ruleList('7', runtime)).toEqual('few');
      });
      it('few 8', () => {
        expect(ruleList('8', runtime)).toEqual('few');
      });
      it('few 9', () => {
        expect(ruleList('9', runtime)).toEqual('few');
      });
      it('few 10', () => {
        expect(ruleList('10', runtime)).toEqual('few');
      });
      it('few 103', () => {
        expect(ruleList('103', runtime)).toEqual('few');
      });
      it('few 104', () => {
        expect(ruleList('104', runtime)).toEqual('few');
      });
      it('few 105', () => {
        expect(ruleList('105', runtime)).toEqual('few');
      });
      it('few 106', () => {
        expect(ruleList('106', runtime)).toEqual('few');
      });
      it('few 107', () => {
        expect(ruleList('107', runtime)).toEqual('few');
      });
      it('few 108', () => {
        expect(ruleList('108', runtime)).toEqual('few');
      });
      it('few 109', () => {
        expect(ruleList('109', runtime)).toEqual('few');
      });
      it('few 110', () => {
        expect(ruleList('110', runtime)).toEqual('few');
      });
      it('few 1003', () => {
        expect(ruleList('1003', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 4.0', () => {
        expect(ruleList('4.0', runtime)).toEqual('few');
      });
      it('few 5.0', () => {
        expect(ruleList('5.0', runtime)).toEqual('few');
      });
      it('few 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('few');
      });
      it('few 7.0', () => {
        expect(ruleList('7.0', runtime)).toEqual('few');
      });
      it('few 8.0', () => {
        expect(ruleList('8.0', runtime)).toEqual('few');
      });
      it('few 9.0', () => {
        expect(ruleList('9.0', runtime)).toEqual('few');
      });
      it('few 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('few');
      });
      it('few 103.0', () => {
        expect(ruleList('103.0', runtime)).toEqual('few');
      });
      it('few 1003.0', () => {
        expect(ruleList('1003.0', runtime)).toEqual('few');
      });
      it('many 11', () => {
        expect(ruleList('11', runtime)).toEqual('many');
      });
      it('many 12', () => {
        expect(ruleList('12', runtime)).toEqual('many');
      });
      it('many 13', () => {
        expect(ruleList('13', runtime)).toEqual('many');
      });
      it('many 14', () => {
        expect(ruleList('14', runtime)).toEqual('many');
      });
      it('many 15', () => {
        expect(ruleList('15', runtime)).toEqual('many');
      });
      it('many 16', () => {
        expect(ruleList('16', runtime)).toEqual('many');
      });
      it('many 17', () => {
        expect(ruleList('17', runtime)).toEqual('many');
      });
      it('many 18', () => {
        expect(ruleList('18', runtime)).toEqual('many');
      });
      it('many 19', () => {
        expect(ruleList('19', runtime)).toEqual('many');
      });
      it('many 20', () => {
        expect(ruleList('20', runtime)).toEqual('many');
      });
      it('many 21', () => {
        expect(ruleList('21', runtime)).toEqual('many');
      });
      it('many 22', () => {
        expect(ruleList('22', runtime)).toEqual('many');
      });
      it('many 23', () => {
        expect(ruleList('23', runtime)).toEqual('many');
      });
      it('many 24', () => {
        expect(ruleList('24', runtime)).toEqual('many');
      });
      it('many 25', () => {
        expect(ruleList('25', runtime)).toEqual('many');
      });
      it('many 26', () => {
        expect(ruleList('26', runtime)).toEqual('many');
      });
      it('many 111', () => {
        expect(ruleList('111', runtime)).toEqual('many');
      });
      it('many 1011', () => {
        expect(ruleList('1011', runtime)).toEqual('many');
      });
      it('many 11.0', () => {
        expect(ruleList('11.0', runtime)).toEqual('many');
      });
      it('many 12.0', () => {
        expect(ruleList('12.0', runtime)).toEqual('many');
      });
      it('many 13.0', () => {
        expect(ruleList('13.0', runtime)).toEqual('many');
      });
      it('many 14.0', () => {
        expect(ruleList('14.0', runtime)).toEqual('many');
      });
      it('many 15.0', () => {
        expect(ruleList('15.0', runtime)).toEqual('many');
      });
      it('many 16.0', () => {
        expect(ruleList('16.0', runtime)).toEqual('many');
      });
      it('many 17.0', () => {
        expect(ruleList('17.0', runtime)).toEqual('many');
      });
      it('many 18.0', () => {
        expect(ruleList('18.0', runtime)).toEqual('many');
      });
      it('many 111.0', () => {
        expect(ruleList('111.0', runtime)).toEqual('many');
      });
      it('many 1011.0', () => {
        expect(ruleList('1011.0', runtime)).toEqual('many');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 101', () => {
        expect(ruleList('101', runtime)).toEqual('other');
      });
      it('other 102', () => {
        expect(ruleList('102', runtime)).toEqual('other');
      });
      it('other 200', () => {
        expect(ruleList('200', runtime)).toEqual('other');
      });
      it('other 201', () => {
        expect(ruleList('201', runtime)).toEqual('other');
      });
      it('other 202', () => {
        expect(ruleList('202', runtime)).toEqual('other');
      });
      it('other 300', () => {
        expect(ruleList('300', runtime)).toEqual('other');
      });
      it('other 301', () => {
        expect(ruleList('301', runtime)).toEqual('other');
      });
      it('other 302', () => {
        expect(ruleList('302', runtime)).toEqual('other');
      });
      it('other 400', () => {
        expect(ruleList('400', runtime)).toEqual('other');
      });
      it('other 401', () => {
        expect(ruleList('401', runtime)).toEqual('other');
      });
      it('other 402', () => {
        expect(ruleList('402', runtime)).toEqual('other');
      });
      it('other 500', () => {
        expect(ruleList('500', runtime)).toEqual('other');
      });
      it('other 501', () => {
        expect(ruleList('501', runtime)).toEqual('other');
      });
      it('other 502', () => {
        expect(ruleList('502', runtime)).toEqual('other');
      });
      it('other 600', () => {
        expect(ruleList('600', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.1', () => {
        expect(ruleList('10.1', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });

    describe('cy', () => {
      const ruleList = (function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var f = runtime.f(num); var t = runtime.t(num); var v = runtime.v(num); var w = runtime.w(num); var e = runtime.e(num); return (n == 0 ? 'zero' : (n == 1 ? 'one' : (n == 2 ? 'two' : (n == 3 ? 'few' : (n == 6 ? 'many' : 'other'))))); });

      it('zero 0', () => {
        expect(ruleList('0', runtime)).toEqual('zero');
      });
      it('zero 0.0', () => {
        expect(ruleList('0.0', runtime)).toEqual('zero');
      });
      it('zero 0.00', () => {
        expect(ruleList('0.00', runtime)).toEqual('zero');
      });
      it('zero 0.000', () => {
        expect(ruleList('0.000', runtime)).toEqual('zero');
      });
      it('zero 0.0000', () => {
        expect(ruleList('0.0000', runtime)).toEqual('zero');
      });
      it('one 1', () => {
        expect(ruleList('1', runtime)).toEqual('one');
      });
      it('one 1.0', () => {
        expect(ruleList('1.0', runtime)).toEqual('one');
      });
      it('one 1.00', () => {
        expect(ruleList('1.00', runtime)).toEqual('one');
      });
      it('one 1.000', () => {
        expect(ruleList('1.000', runtime)).toEqual('one');
      });
      it('one 1.0000', () => {
        expect(ruleList('1.0000', runtime)).toEqual('one');
      });
      it('two 2', () => {
        expect(ruleList('2', runtime)).toEqual('two');
      });
      it('two 2.0', () => {
        expect(ruleList('2.0', runtime)).toEqual('two');
      });
      it('two 2.00', () => {
        expect(ruleList('2.00', runtime)).toEqual('two');
      });
      it('two 2.000', () => {
        expect(ruleList('2.000', runtime)).toEqual('two');
      });
      it('two 2.0000', () => {
        expect(ruleList('2.0000', runtime)).toEqual('two');
      });
      it('few 3', () => {
        expect(ruleList('3', runtime)).toEqual('few');
      });
      it('few 3.0', () => {
        expect(ruleList('3.0', runtime)).toEqual('few');
      });
      it('few 3.00', () => {
        expect(ruleList('3.00', runtime)).toEqual('few');
      });
      it('few 3.000', () => {
        expect(ruleList('3.000', runtime)).toEqual('few');
      });
      it('few 3.0000', () => {
        expect(ruleList('3.0000', runtime)).toEqual('few');
      });
      it('many 6', () => {
        expect(ruleList('6', runtime)).toEqual('many');
      });
      it('many 6.0', () => {
        expect(ruleList('6.0', runtime)).toEqual('many');
      });
      it('many 6.00', () => {
        expect(ruleList('6.00', runtime)).toEqual('many');
      });
      it('many 6.000', () => {
        expect(ruleList('6.000', runtime)).toEqual('many');
      });
      it('many 6.0000', () => {
        expect(ruleList('6.0000', runtime)).toEqual('many');
      });
      it('other 4', () => {
        expect(ruleList('4', runtime)).toEqual('other');
      });
      it('other 5', () => {
        expect(ruleList('5', runtime)).toEqual('other');
      });
      it('other 7', () => {
        expect(ruleList('7', runtime)).toEqual('other');
      });
      it('other 8', () => {
        expect(ruleList('8', runtime)).toEqual('other');
      });
      it('other 9', () => {
        expect(ruleList('9', runtime)).toEqual('other');
      });
      it('other 10', () => {
        expect(ruleList('10', runtime)).toEqual('other');
      });
      it('other 11', () => {
        expect(ruleList('11', runtime)).toEqual('other');
      });
      it('other 12', () => {
        expect(ruleList('12', runtime)).toEqual('other');
      });
      it('other 13', () => {
        expect(ruleList('13', runtime)).toEqual('other');
      });
      it('other 14', () => {
        expect(ruleList('14', runtime)).toEqual('other');
      });
      it('other 15', () => {
        expect(ruleList('15', runtime)).toEqual('other');
      });
      it('other 16', () => {
        expect(ruleList('16', runtime)).toEqual('other');
      });
      it('other 17', () => {
        expect(ruleList('17', runtime)).toEqual('other');
      });
      it('other 18', () => {
        expect(ruleList('18', runtime)).toEqual('other');
      });
      it('other 19', () => {
        expect(ruleList('19', runtime)).toEqual('other');
      });
      it('other 20', () => {
        expect(ruleList('20', runtime)).toEqual('other');
      });
      it('other 100', () => {
        expect(ruleList('100', runtime)).toEqual('other');
      });
      it('other 1000', () => {
        expect(ruleList('1000', runtime)).toEqual('other');
      });
      it('other 10000', () => {
        expect(ruleList('10000', runtime)).toEqual('other');
      });
      it('other 100000', () => {
        expect(ruleList('100000', runtime)).toEqual('other');
      });
      it('other 1000000', () => {
        expect(ruleList('1000000', runtime)).toEqual('other');
      });
      it('other 0.1', () => {
        expect(ruleList('0.1', runtime)).toEqual('other');
      });
      it('other 0.2', () => {
        expect(ruleList('0.2', runtime)).toEqual('other');
      });
      it('other 0.3', () => {
        expect(ruleList('0.3', runtime)).toEqual('other');
      });
      it('other 0.4', () => {
        expect(ruleList('0.4', runtime)).toEqual('other');
      });
      it('other 0.5', () => {
        expect(ruleList('0.5', runtime)).toEqual('other');
      });
      it('other 0.6', () => {
        expect(ruleList('0.6', runtime)).toEqual('other');
      });
      it('other 0.7', () => {
        expect(ruleList('0.7', runtime)).toEqual('other');
      });
      it('other 0.8', () => {
        expect(ruleList('0.8', runtime)).toEqual('other');
      });
      it('other 0.9', () => {
        expect(ruleList('0.9', runtime)).toEqual('other');
      });
      it('other 1.1', () => {
        expect(ruleList('1.1', runtime)).toEqual('other');
      });
      it('other 1.2', () => {
        expect(ruleList('1.2', runtime)).toEqual('other');
      });
      it('other 1.3', () => {
        expect(ruleList('1.3', runtime)).toEqual('other');
      });
      it('other 1.4', () => {
        expect(ruleList('1.4', runtime)).toEqual('other');
      });
      it('other 1.5', () => {
        expect(ruleList('1.5', runtime)).toEqual('other');
      });
      it('other 1.6', () => {
        expect(ruleList('1.6', runtime)).toEqual('other');
      });
      it('other 1.7', () => {
        expect(ruleList('1.7', runtime)).toEqual('other');
      });
      it('other 10.0', () => {
        expect(ruleList('10.0', runtime)).toEqual('other');
      });
      it('other 100.0', () => {
        expect(ruleList('100.0', runtime)).toEqual('other');
      });
      it('other 1000.0', () => {
        expect(ruleList('1000.0', runtime)).toEqual('other');
      });
      it('other 10000.0', () => {
        expect(ruleList('10000.0', runtime)).toEqual('other');
      });
      it('other 100000.0', () => {
        expect(ruleList('100000.0', runtime)).toEqual('other');
      });
      it('other 1000000.0', () => {
        expect(ruleList('1000000.0', runtime)).toEqual('other');
      });
    });
  });
})();
