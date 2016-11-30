define([
  'jquery',
  '../keys'
], function ($, KEYS) {
  function SelectAll() { }

  SelectAll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$selection.on('mousedown', '.select2-selection__all',
      function (evt) {
        self._handleSelectAll(evt);
      });

  };

  SelectAll.prototype._handleSelectAll = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    console.log(this);
    var dataSel = this.$element.find('option').prop('selected', 'selected');
    evt.stopPropagation();
    this.$element.trigger('change');
    this.trigger('toggle', {});
  };



  SelectAll.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__all').length > 0) {
      return;
    }

    var $selectall = $(
      '<span class="select2-selection__all">' +
      '&#x2714;' +
      '</span>'
    );
    //  $selectall.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($selectall);
  };

  return SelectAll;
});
